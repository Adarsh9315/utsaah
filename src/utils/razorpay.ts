"use client";

export const openRazorpaySDK = async (
  amount: number,
  currency: "INR" | "USD",
  name: string,
  email: string,
  phone: string
): Promise<boolean> => {
  try {
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return false;
    }

    // ✅ Check if Razorpay is available
    if (typeof window !== "undefined" && !(window as any).Razorpay) {
      alert("Razorpay SDK not loaded. Please refresh the page.");
      return false;
    }

    // ✅ Create Razorpay order
    const order = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, currency }),
    }).then((res) => res.json());

    return new Promise((resolve) => {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY!,
        amount: order.amount,
        currency: order.currency,
        name: "Utsaah Foundation",
        description: "Donation",
        order_id: order.id,
        prefill: {
          name: name, // ✅ User-entered Name
          email: email, // ✅ User-entered Email
          contact: phone, // ✅ User-entered Phone
        },
        handler: async function (response: any) {
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          }).then((res) => res.json());

          if (verifyRes.success) {
            resolve(true);
          } else {
            alert("Payment Verification Failed!");
            resolve(false);
          }
        },
        theme: { color: "#FF5733" },
      };

      const razorpayInstance = new (window as any).Razorpay(options);
      razorpayInstance.open();
    });
  } catch (error) {
    console.error("Payment Error:", error);
    alert("Payment Failed");
    return false;
  }
};

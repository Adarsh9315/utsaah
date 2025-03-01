import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY!,
  key_secret: process.env.RAZORPAY_SECRET!,
});

export async function POST(req: NextRequest) {
  try {
    const { amount, currency } = await req.json();

    if (!amount || isNaN(amount) || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    if (currency !== "INR" && currency !== "USD") {
      return NextResponse.json({ error: "Invalid currency" }, { status: 400 });
    }

    const options = {
      amount: Math.round(amount * 100), // Convert to paise or cents
      currency: currency,
      receipt: `receipt_${Math.random().toString(36).substr(2, 9)}`,
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json(order, { status: 200 });
  } catch (error: any) {
    console.error("Error Creating Order:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

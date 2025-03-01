import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature === razorpay_signature) {
      return NextResponse.json({ success: true, message: "Payment Verified Successfully" }, { status: 200 });
    } else {
      return NextResponse.json({ success: false, message: "Payment Verification Failed" }, { status: 400 });
    }
  } catch (error) {
    console.error("Payment Verification Error:", error);
    return NextResponse.json({ error: "Error verifying payment" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const webhookSecret = process.env.RAZORPAY_SECRET!;
    const signature = req.headers.get("x-razorpay-signature") as string;
    const body = await req.text();

    const expectedSignature = crypto.createHmac("sha256", webhookSecret).update(body).digest("hex");

    if (signature !== expectedSignature) {
      return NextResponse.json({ error: "Invalid Webhook Signature" }, { status: 400 });
    }

    console.log("Webhook Event Received:", body);
    return NextResponse.json({ success: true, message: "Webhook Processed Successfully" }, { status: 200 });
  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ error: "Error processing webhook" }, { status: 500 });
  }
}

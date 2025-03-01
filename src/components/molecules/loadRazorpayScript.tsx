"use client";

import { useEffect } from "react";

const LoadRazorpayScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => console.log("✅ Razorpay Loaded");
    document.body.appendChild(script);
  }, []);

  return null;
};

export default LoadRazorpayScript;

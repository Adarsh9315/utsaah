"use client";

import React, { useState } from "react";
import { openRazorpaySDK } from "@/utils/razorpay";
import ThankYouPopup from "./thankYouPopup";

const Donation = () => {
  const [amount, setAmount] = useState<number | "">("");
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleDonation = async () => {
    if (!name || !email || !phone) {
      alert("Please fill in all details before donating.");
      return;
    }

    const success = await openRazorpaySDK(Number(amount), currency, name, email, phone);
    if (success) {
      setShowThankYou(true);
    }
  };

  return (
    <div className="make_donation_area section_padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center mb-55">
              <h3>
                <span>Make a Donation</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form className="donation_form">
              <div className="row align-items-center">
                  {/* Name Input */}
                  <div className="col-md-12">
                    <div className="input_field">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="col-md-12">
                    <div className="input_field pt-2">
                      <div className="input-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="col-md-12">
                    <div className="input_field pt-2">
                      <div className="input-group">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Phone number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                {/* Currency Selection */}
                <div className="col-md-5 pt-3">
                  <div className="single_amount">
                    <div className="fixed_donat d-flex align-items-center justify-content-between">
                      {["INR", "USD"].map((cur) => (
                        <div key={cur} className="single_doonate">
                          <input
                            type="radio"
                            id={`currency_${cur}`}
                            name="currency-group"
                            checked={currency === cur}
                            onChange={() => setCurrency(cur as "INR" | "USD")}
                          />
                          <label htmlFor={`currency_${cur}`}>{cur}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Amount Input */}
                <div className="col-md-7 pt-3">
                  <div className="input_field">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">{currency === "INR" ? "₹" : "$"}</span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value ? parseFloat(e.target.value) : "")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Donate Button */}
        <div className="row">
          <div className="col-12">
            <div className="donate_now_btn text-center">
              <button className="boxed-btn4" onClick={handleDonation} disabled={!amount || Number(amount) <= 0}>
                Donate Now
              </button>
            </div>
          </div>
        </div>

      </div>

      <ThankYouPopup show={showThankYou} onClose={() => setShowThankYou(false)} />
    </div>
  );
};

export default Donation;

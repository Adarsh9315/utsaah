"use client";

import React from "react";
import bannerImage from "../../img/banner/banner2.jpg";

interface ThankYouPopupProps {
  show: boolean;
  onClose: () => void;
}

const ThankYouPopup: React.FC<ThankYouPopupProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="overlay">
      <div className="popup">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <img src={bannerImage.src} alt="Thank You" className="thank-you-image" />
        <h2>Thank You for Your Donation!</h2>
        <p>Your generosity is greatly appreciated. 🙇 🙏</p>
      </div>
      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        .popup {
          background: white;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
          max-width: 600px;
          position: relative;
        }
        .close-btn {
          position: absolute;
          top: 2px;
          right: 2px;
          background: none;
          border: none;
          font-size: 26px;
          cursor: pointer;
        }
        .thank-you-image {
          width: 100%;
          height: auto;
          margin-bottom: 10px;
        }
        h2{
          color: #3CC78F;
        }
        p{
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};

export default ThankYouPopup;

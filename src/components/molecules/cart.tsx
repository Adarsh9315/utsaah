import { ResourceData } from "@/interfaces";
import Image from "next/image";
import React from "react";
import userImage from "../../../public/assets/images/user.png";
import phoneImage from "../../../public/assets/images/phone.png";
import locationImage from "../../../public/assets/images/location.png";

const Cart: React.FC<ResourceData> = ({ title, location, member, numbers, footerText }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 flex flex-col justify-between">
      <div className="bg-green-200 p-3 text-center text-gray-800 font-bold">
        {title}
      </div>
      <div className="p-4 md:space-y-8">
        <div className="flex items-center gap-x-5">
          <Image src={userImage} height={23} width={23} alt="user" />
          <span className="text-gray-700">{member}</span>
        </div>
        <div className="flex items-center gap-x-5">
          <Image src={phoneImage} height={23} width={23} alt="user" />
          <span className="text-gray-700">{numbers}</span>
        </div>
        <div className="flex items-center gap-x-5">
          <Image src={locationImage} height={23} width={23} alt="user" />
          <span className="text-gray-700">{location}</span>
        </div>
      </div>
      <div className="bg-green-200 text-center p-2 text-sm font-semibold text-gray-800">
        {footerText}
      </div>
    </div>
  );
};

export default Cart;

import { resourceData } from "@/app/resource/data";
import Cart from "@/components/molecules/cart";
import React from "react";

const ResourceTemplate = () => {
  const footerText = "GOVERNMENT FUNDS"
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 bg-gray-100 min-h-screen mt-32 mx-16 gap-6">
      {resourceData.map((data) => (
        <Cart key={data.title} {...data} footerText={footerText}/>
      ))}
    </div>
  );
};

export default ResourceTemplate;

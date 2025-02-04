import Image from "next/image";
import React from "react";

const PricingFeature = ({ title }: { title: string }) => {
  return (
    <div>
      <li className="flex items-center gap-1">
        <Image
          src="/Tick.png"
          alt="Tick"
          width={15}
          height={10}
          className="h-4 w-6"
        />

        <span className="text-gray-700">{title}</span>
      </li>
    </div>
  );
};

export default PricingFeature;

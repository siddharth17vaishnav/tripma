import { IconConfig } from "@src/utils/iconConfig";
import Image from "next/image";
import React, { useState } from "react";

const DiscountAds = () => {
  const [showBanner, setShowBanner] = useState(true);
  const handleCloseBanner = () => {
    setShowBanner(false);
  };
  return (
    <>
      {showBanner && (
        <div className="bg-blue">
          <div className="flex justify-center items-center">
            <p className="font-nunito font-semibold text-[18px] text-center text-white py-[20px]">
              Join Tripma today and save up to 20% on your flight using code
              TRAVEL at checkout. Promotion valid for new users only.
            </p>
            <button className="pl-20" onClick={handleCloseBanner}>
              <Image
                src={IconConfig.CLOSED_ICON}
                alt="close-icon"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DiscountAds;

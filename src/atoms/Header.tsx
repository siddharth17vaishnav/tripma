import { ImageConfig } from "@src/utils/imageConfig";
import Image from "next/image";
import React from "react";

const Header = () => {
  const sideNav = ["Flight", "Hotels", "Packages", "Sign In", "Sign Up"];

  return (
    <div className="py-8 px-24">
      {/* parent-div */}
      <div className="flex justify-between">
        {/* Image */}
        <div>
          <Image
            src={ImageConfig.LOGO_IMAGE}
            alt="logo-image"
            width={100}
            height={100}
          />
        </div>
        {/* sing-up stack */}
        <div className="flex gap-[15px] justify-center items-center">
          {sideNav.map((navList) => {
            return (
              <ul
                className="font-nunito font-normal text-16 text-center"
                key={navList}
              >
                <li className="text-grey hover:text-blue">
                  {navList === "Sign Up" ? (
                    <button className="bg-blue text-white py-2 px-4 rounded-lg">
                      {navList}
                    </button>
                  ) : (
                    <button>{navList}</button>
                  )}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;

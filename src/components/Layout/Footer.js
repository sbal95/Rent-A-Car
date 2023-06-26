import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsFillTelephoneFill, BsPinMapFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

export const Footer = () => {
  return (
    <div className="w-full bg-neutral-800 text-white flex flex-col gap-5 items-center justify-center py-8">
      <span className="font-dancing font-bold text-5xl">
        Rent A Car
      </span>
      <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-5 px-5 lg:justify-items-center">
        <div className="font-relaway flex flex-col gap-5">
          <h2 className="text-3xl ">Information</h2>
          <span>
            Lorem Ipsum is dolor sit amet, consectetur adipiscing elit in diam
            non pro pos reprehenderit in voluptate velit esse cillum dolore
            magna.
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl">Contact Us</h2>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3 items-center justify-start">
              <BsPinMapFill /> <span className=""> Location </span>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start">
              <BsFillTelephoneFill />
              <span className=""> (+90) 575 542 78 22 </span>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start">
              <BiLogoGmail /> <span className=""> demomail@gmail.com </span>
            </div>
            <div className="flex flex-row w-full gap-3">
              <div className="bg-white text-black text-xl p-2 flex rounded-full">
                <FaFacebook />
              </div>
              <div className="bg-white text-black text-xl p-2 flex rounded-full">
                <FaTwitter />
              </div>
              <div className="bg-white text-black text-xl p-2 flex rounded-full">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

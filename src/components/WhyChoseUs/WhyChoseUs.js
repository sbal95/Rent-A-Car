import React from "react";

const WhyChoseUs = () => {
  return (
    <div className="w-full h-full py-10 bg-orange-500 text-white">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="font-relaway font-semibold text-4xl ">Why Chose Us</div>
        <div className="flex flex-wrap justify-evenly gap-2">
          <div className="flex flex-col gap-5">
            <img src="/images/safe-icon.png" className="w-14 h-14" alt="" />
            <div className="text-2xl font-relaway font-medium">
              SAFETY & SECURITY
            </div>
            <div className="max-w-[75%]">
              Variations of passages of Lorem Ipsum available, but the majority
              have
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <img src="/images/booking-icon.png" className="w-14 h-14" alt="" />
            <div className="text-2xl font-relaway font-medium">
              Online Booking
            </div>
            <div className="max-w-[75%]">
              Variations of passages of Lorem Ipsum available, but the majority
              have
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <img src="/images/driver-icon.png" className="w-14 h-14" alt="" />
            <div className="text-2xl font-relaway font-medium">
              Best Drivers
            </div>
            <div className="max-w-[75%]">
              Variations of passages of Lorem Ipsum available, but the majority
              have
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;

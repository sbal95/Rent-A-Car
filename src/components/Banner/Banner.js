import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 grid-cols-1 ">
      <div className="w-full flex flex-col justify-center items-center gap-10 container px-20 py-10 lg:py-5 mx-auto">
        <div className="flex flex-col justify-center items-centers font-relaway font-extrabold text-6xl gap-3">
          <span className="text-orange-500"> Car Rent </span>
          <span className="text-black"> For You</span>
        </div>
        <div className="text-base font-relaway font-light w-[80%] text-gray-600 text-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority
        </div>
        <Link
          to="/vehicles"
          className="bg-orange-500 text-lg font-relaway font-bold w-40 h-14 text-white rounded-sm flex justify-center items-center hover:bg-black"
        >
          Vehicles
        </Link>
      </div>
      <div className="bg-orange-500 float-right rounded-l-[80%] lg:w-full w-[85%] ">
        <img
          src="./images/banner-img.png"
          alt="react logo"
          className="-ml-20"
        />
      </div>
    </div>
  );
};

export default Banner;

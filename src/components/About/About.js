import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 place-content-center place-items-center gap-3 py-10">
      <img src="./images/about-img.png" alt="react logo" className="" />
      <div className="w-full flex flex-col justify-center items-center gap-10 container px-20">
        <span className="flex justify-center items-centers font-relaway font-extrabold text-6xl gap-3">
          ABOUT <span className="text-orange-500"> US</span>
        </span>
        <span className="text-base font-relaway font-light w-[80%] text-gray-600 text-center">
          Going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the Internet tend to repeat predefined going to
          use a passage of Lorem Ipsum, you need to be sure there isn't anything
          embarrassing hidden in the middle of text. All the Lorem Ipsum
          generators on the Internet tend to repeat predefined
        </span>
        <Link
          to="/about"
          className="bg-orange-500 text-lg font-relaway font-bold w-40 h-14 text-white rounded-sm flex justify-center items-center hover:bg-black"
        >
          Read More !
        </Link>
      </div>
    </div>
  );
};

export default About;

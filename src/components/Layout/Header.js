import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-[#0e0c06] text-center text-white flex flex-row justify-around py-6 relative ">
        <span className="font-dancing font-bold text-3xl cursor-pointer">
          <Link to="/"> Rent A Car</Link>
        </span>
        <ul className="hidden lg:flex flex-row gap-x-8 font-relaway text-lg">
          <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ">
            <Link to="/home">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ">
            <Link to="/vehicles">Vehicles</Link>
          </li>
          <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ">
            <Link to="/service">Service</Link>
          </li>
          <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <button
          className="lg:hidden flex items-center justify-center text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RxHamburgerMenu className="hover:text-red-500" />
        </button>
      </div>
      <ul
        className={`py-3 flex-col gap-y-3 font-relaway text-lg justify-center items-center bg-[#0e0c06] text-white border-none lg:hidden flex ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ">
          <Link to="/home">Home</Link>
        </li>
        <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ">
          <Link to="/vehicles">Vehicles</Link>
        </li>
        <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ">
          <Link to="/service">Service</Link>
        </li>
        <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;

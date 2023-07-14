import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { carList } from "../../components/CarList/carList";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CarDetail = () => {
  const { id } = useParams();
  const car = carList.find((car) => car.id === id);
  const imgList = car.imgList;

  const scrollRef = useRef(null);
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.clientWidth + 40,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -(scrollRef.current.clientWidth + 40),
      behavior: "smooth",
    });
  };

  return (
    <div className="grid grid-cols-12 font-relaway font-semibold py-20 mx-auto h-full justify-items-center justify-center w-full px-40 gap-10 lg:gap-1">
      <button className="h-full flex justify-center items-center w-20">
        <AiOutlineLeft
          className="bg-orange-500 text-white shadow-custom p-1 h-20 w-20 rounded-full hover:bg-white hover:text-orange-500"
          onClick={scrollLeft}
        />
      </button>
      <div
        className="w-full h-[600px] gap-10 rounded-xl flex overflow-hidden  col-span-10 lg:col-span-7 shadow-custom relative "
        ref={scrollRef}
      >
        {imgList.map((img, i) => (
          <img
            src={img}
            alt="react logo"
            className="min-w-[100%] h-full  object-cover "
            key={i}
            d
          />
        ))}
      </div>
      <button className="flex justify-center items-center w-20">
        <AiOutlineRight
          className="bg-orange-500 text-white shadow-custom p-1 h-20 w-20 rounded-full hover:bg-white hover:text-orange-500"
          onClick={scrollRight}
        />
      </button>
      <div className="h-full flex flex-col  lg:col-start-10 col-start-2 col-span-10 lg:col-span-3 w-full items-center text-center gap-32 rounded-3xl justify-evenly shadow-custom p-5">
        <div className=" flex flex-col gap-8 h-full">
          <div className="flex flex-col gap-2 text-base font-light">
            <span className="font-relaway font-semibold text-xl">Car Name</span>
            {car.name}
          </div>
          <div className="flex flex-col gap-2 text-base font-light">
            <span className="font-relaway font-semibold text-xl">
              Model Year
            </span>
            {car.modal}
          </div>
          <div className="flex flex-col gap-2 text-base font-light">
            <span className="font-relaway font-semibold text-xl">
              Horse Power
            </span>
            {car.power}
          </div>
          <div className="flex flex-col gap-2 text-base font-light">
            <span className="font-relaway font-semibold text-xl">Price</span>
            {car.price} $
          </div>
        </div>
        <button className="w-48 h-20 bg-orange-500 text-white hover:bg-white hover:text-orange-500 border-2 border-white hover:border-orange-500 rounded-lg text-2xl">
          Connect Us
        </button>
      </div>
    </div>
  );
};

export default CarDetail;

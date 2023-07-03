import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { carList } from "../../components/CarList/carList";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import CarDetailImages from "../../components/CarDeatailImages/CarDetailImages";

const CarDetail = () => {
  const { id } = useParams();
  const car = carList.find((car) => car.id === id);
  const imgList = car.imgList;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexUp = () => {
    if (activeIndex < imgList.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };
  const activeIndexDown = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(imgList.length - 1);
    }
  };
  return (
    <div className="flex flex-row justify-evenly gap-20 font-relaway font-semibold py-20 container mx-auto h-full items-start">
      <div className="relative w-[60%] h-[600px] rounded-xl">
        {imgList.map((img, i) => (
          <img
            src={img}
            alt="react logo"
            className={`${
              activeIndex === i ? "flex" : "hidden"
            } w-[100%] h-[100%] rounded-3xl object-cover`}
            key={i}
          />
        ))}
        <button
          className="bg-slate-100 bg-opacity-25  cursor-pointer p-3 text-2xl absolute left-0 top-[50%]"
          onClick={() => activeIndexDown()}
        >
          <AiOutlineLeft />
        </button>
        <button
          className="bg-slate-100 bg-opacity-25  cursor-pointer p-3 text-2xl  absolute right-0 top-[50%]"
          onClick={() => activeIndexUp()}
        >
          <AiOutlineRight />
        </button>
        <div className="flex flex-row flex-wrap container pt-5 w-full h-20 gap-3">
          {imgList.map((img, i) => (
            <button
              onClick={() => setActiveIndex(i)}
              className={`${activeIndex === i ? "border-2 border-blue-500" : ""} rounded-xl`}
            >
              <CarDetailImages img={img} className="rounded-xl"/>
            </button>
          ))}
        </div>
      </div>
      <div className="w-[20%] h-full flex flex-col gap-32 rounded-3xl items-start justify-evenly">
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

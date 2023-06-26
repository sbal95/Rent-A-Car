import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ price, title, id, img }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 font-relaway font-semibold py-5">
      <img src={img} alt="react logo" className="w-[75%]" />
      <div className="text-3xl ">{title}</div>
      <div className="text-xl text-orange-500 ">Start Per Day : {price}$</div>
      <Link
        to={"/carDetail/" + id}
        className="bg-orange-500 text-lg font-relaway font-bold w-40 h-14 text-white rounded-sm flex justify-center items-center hover:bg-black"
      >
        Car Detail
      </Link>
    </div>
  );
};

export default CarCard;

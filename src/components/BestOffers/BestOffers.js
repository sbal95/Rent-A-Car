import React from "react";
import CarCard from "../CarCard/CarCard";
import { carList } from "../CarList/carList";
import { Link } from "react-router-dom";

const BestOffers = () => {
  const filteredCarList = carList.filter((car) => car.isBestOffer === true);
  return (
    <div className="w-full py-16 flex flex-col gap-16 items-center justify-center">
      <div className="text-white py-14 font-relaway font-extrabold text-3xl text-center bg-orange-500 ">
        Our Best Offers
      </div>
      <div className="grid grid-cols-3 container mx-auto gap-10">
        {filteredCarList.map((car, i) => (
          <CarCard
            key={i}
            img={car.img}
            title={car.name}
            id={car.id}
            price={car.price}
          />
        ))}
      </div>
      <button className="w-52 h-20 bg-orange-500 hover:border-2 hover:border-orange-500 text-white hover:text-orange-500 hover:bg-white text-center flex items-center justify-start font-relaway font-bold text-2xl">
        <Link to="/vehicles" className="text-center w-full">All Vehicles !</Link>
      </button>
    </div>
  );
};

export default BestOffers;

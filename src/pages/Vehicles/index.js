import React from "react";
import { carList } from "../../components/CarList/carList";
import CarCard from "../../components/CarCard/CarCard";

const Vehicles = () => {
  return (
      <div className="grid grid-cols-3 container mx-auto gap-14 py-12 ">
        {carList.map((car, i) => (
          <CarCard
            key={i}
            img={car.img}
            title={car.name}
            id={car.id}
            price={car.price}
          />
        ))}
      </div>
   );
};

export default Vehicles;

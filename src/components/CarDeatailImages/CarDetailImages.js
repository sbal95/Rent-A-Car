import React from "react";

const CarDetailImages = ({ img }) => {
  return (
    <div>
      <img
        src={img}
        alt=""
        className="w-full h-full rounded-xl object-cover"
      ></img>
    </div>
  );
};

export default CarDetailImages;

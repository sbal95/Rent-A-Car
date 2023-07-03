import React from "react";

const CarDetailImages = ({ img }) => {
  return (
    <div>
      <img src={img} alt="" className="w-20 h-20 rounded-xl object-cover"></img>
    </div>
  );
};

export default CarDetailImages;

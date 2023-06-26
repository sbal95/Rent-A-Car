import React from "react";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import BestOffers from "../../components/BestOffers/BestOffers";
import WhyChoseUs from "../../components/WhyChoseUs/WhyChoseUs";
import GetInTouch from "../../components/GetInTouch/GetInTouch";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <BestOffers />
      <WhyChoseUs />
      <GetInTouch />
    </div>
  );
};

export default Home;

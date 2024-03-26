import React from "react";

import Hero from "../../components/Hero/Hero";
import OurTeam from "../../components/OurTeam/OurTeam";
import Companies from "../../components/Companies/Companies";
import About from "../../components/About/About";
import HomeAdvertisement from "../../components/HomeAdvertisement/HomeAdvertisement";

import "./home.scss";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Hero />
      <OurTeam />
      <Companies />
      <About />
      <HomeAdvertisement />
    </div>
  );
};

export default Home;

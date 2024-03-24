import React from "react";

import Hero from "../../components/Hero/Hero";
import OurTeam from "../../components/OurTeam/OurTeam";
import About from "../../components/About/About";

import "./home.scss";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Hero />
      <OurTeam />
      <About />
    </div>
  );
};

export default Home;

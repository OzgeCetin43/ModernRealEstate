import React from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

import hero from "../../assets/images/about-hero.jpg";

import "./about.scss";
import Reveal from "../Reveal/Reveal";

const easing = [0.6, -0.05, 0.01, 0.99];

const About: React.FC = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: easing }}
    >
      <div className="about-container-left">
        <Reveal>
          <img src={hero} alt="hero" className="about-hero" />
          <div className="play-container">
            <FaPlay />
          </div>
        </Reveal>
      </div>
      <div className="about-container-right">
        <Reveal>
          <h1 className="about-hero-title">
            <span>Efficiency.</span>
            <span>Transparency.</span>
            <span>Control.</span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="about-hero-description">
            <span>Jivux</span> developed a platform for the Real Estate
            marketplace that allows buyers and sellers to easily execute a
            transaction on their own.The platform drives efficency, cost
            transparency and control into the hands of the consumers.{" "}
            <span>Jivux</span> is Real Estate Redefined.
          </p>
        </Reveal>
      </div>
    </motion.div>
  );
};

export default About;

import React from "react";
import { FaPlay } from "react-icons/fa";

import dots from "../../assets/images/about-us-dots.svg";
import hero from "../../assets/images/about-us-hero.jpg";
import video from "../../assets/images/about-us-video.jpg";
import logo from "../../assets/images/logo-dark.svg";
import { aboutCompany } from "../../assets/data/aboutCompany";

import Reveal from "../Reveal/Reveal";

import "./aboutCompany.scss";

const AboutCompany: React.FC = () => {
  return (
    <div className="about-company-container">
      <div className="about-company-container-left">
        <img src={dots} className="dots" alt="dots" />
        <div className="about-company-hero-container">
          <img src={hero} className="about-company-hero" alt="hero" />
          <img src={video} className="about-company-video" alt="video" />
          <FaPlay className="play-icon" />
        </div>
      </div>
      <div className="about-company-container-right">
        <Reveal width="100%">
          <div className="about-company-subtitle-container">
            <img src={logo} alt="logo" />
            <span>About Jivux</span>
          </div>
        </Reveal>
        <Reveal>
          <h1 className="about-company-title">
            The Leading Real Estate About Marketplace.
          </h1>
        </Reveal>
        <div className="about-company-items">
          {aboutCompany.map(({ id, icon, title }) => (
            <Reveal>
              <div key={id} className="about-company-item">
                <img src={icon} alt="icon" />
                <h2>{title}</h2>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;

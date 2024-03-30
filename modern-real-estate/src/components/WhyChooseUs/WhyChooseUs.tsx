import React from "react";

import { whyChooseUs } from "../../assets/data/whyChooseUs";

import Reveal from "../Reveal/Reveal";

import "./whyChooseUs.scss";

const WhyChooseUs: React.FC = () => {
  return (
    <div className="why-choose-us-container">
      <Reveal>
        <h1 className="why-choose-us-title">Why choose us</h1>
      </Reveal>
      <Reveal>
        <p className="why-choose-us-description">
          Save your time and effort with our tools
        </p>
      </Reveal>
      <div className="why-choose-us-items">
        {whyChooseUs.map(({ id, icon, title, image, description }) => {
          const Icon = icon;
          return (
            <Reveal>
              <div key={id} className="why-choose-us-item">
                <Icon />
                <h3 className="why-choose-us-item-title">{title}</h3>
                <img src={image} alt="why choose us" />
                <p className="why-choose-us-item-description">{description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;

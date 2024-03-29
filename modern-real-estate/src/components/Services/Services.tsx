import React from "react";

import { services } from "../../assets/data/services";

import "./services.scss";
import Reveal from "../Reveal/Reveal";

const Services: React.FC = () => {
  return (
    <div className="services-container">
      <Reveal>
        <small className="services-subtitle">
          Discover Our Range of Expertise
        </small>
      </Reveal>
      <Reveal>
        <h1 className="services-title">Services We Provide</h1>
      </Reveal>
      <div className="services-items">
        {services.map(({ id, icon, title, description }) => (
          <Reveal>
            <div key={id} className="services-item">
              <img src={icon} alt="service" />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Services;

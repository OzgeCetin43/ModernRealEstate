import React from "react";

import hero from "../../assets/images/about-timeline-hero.webp";
import { aboutTimeline } from "../../assets/data/aboutTimeline";

import Reveal from "../Reveal/Reveal";

import "./aboutTimeline.scss";

const AboutTimeline: React.FC = () => {
  return (
    <div className="about-timeline-container">
      <div className="about-timeline-container-left">
        <Reveal>
          <img src={hero} alt="timeline hero" />
        </Reveal>
      </div>
      <div className="about-timeline-container-right">
        <Reveal>
          <small className="about-timeline-subtitle">
            Our Companies Timeline
          </small>
        </Reveal>
        <Reveal>
          <h1 className="about-timeline-title">A Journey through Time</h1>
        </Reveal>
        <Reveal>
          <p className="about-timeline-description">
            Our timeline tells the story of our evolution, from our founding in
            1932 to our current global expansion.
          </p>
        </Reveal>
        <Reveal>
          <div className="timeline">
            {aboutTimeline.map(({ id, title, description }) => (
              <div key={id} className="checkpoint">
                <div>
                  <h2 className="timeline-title">{title}</h2>
                  <p className="timeline-description">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default AboutTimeline;

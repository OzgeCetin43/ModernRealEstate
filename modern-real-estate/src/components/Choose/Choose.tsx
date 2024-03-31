import React from "react";

import { choose } from "../../assets/data/choose";

import Reveal from "../Reveal/Reveal";

import "./choose.scss";

const Choose: React.FC = () => {
  return (
    <div className="choose-container">
      {choose.map(
        ({ id, icon, title, description, buttonIcon, buttonText }) => {
          const Icon = buttonIcon;
          return (
            <Reveal>
              <div key={id} className="choose-inner-container">
                <div className="choose-container-item">
                  <img src={icon} alt="icon" />
                  <div className="choose-container-item-info">
                    <h2 className="choose-title">{title}</h2>
                    <p className="choose-description">{description}</p>
                  </div>
                </div>
                <div className="choose-button-container">
                  <Icon />
                  <button>{buttonText}</button>
                </div>
              </div>
            </Reveal>
          );
        }
      )}
    </div>
  );
};

export default Choose;

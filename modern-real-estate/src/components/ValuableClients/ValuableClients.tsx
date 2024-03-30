import React from "react";

import { valuableClients } from "../../assets/data/valuableClients";

import Reveal from "../Reveal/Reveal";

import "./valuableClients.scss";

const ValuableClients: React.FC = () => {
  return (
    <div className="valuable-clients-container">
      {valuableClients.map(({ id, icon }) => (
        <Reveal>
          <div key={id} className="client-item">
            <img src={icon} alt="valuable client" />
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default ValuableClients;

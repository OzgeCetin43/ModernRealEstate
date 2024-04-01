import React, { useEffect, useState } from "react";

import { propertyChoices } from "../../assets/data/propertyChoices";

import Reveal from "../Reveal/Reveal";

import "./propertyChoices.scss";

const PropertyChoices: React.FC = () => {
  const choices = ["all", "amsterdam", "florida", "ibiza", "rio di janeiro"];
  const [activeChoice, setActiveChoice] = useState("all");
  const [filteredPropertyChoices, setFilteredPropertyChoices] =
    useState(propertyChoices);

  useEffect(() => {
    setFilteredPropertyChoices(
      propertyChoices.filter((x) =>
        activeChoice === "all" ? propertyChoices : x.choice === activeChoice
      )
    );
  }, [activeChoice]);

  return (
    <Reveal width="100%">
      <div className="property-choices-container">
        <div className="property-choices-buttons">
          {choices.map((choice) => (
            <div
              className={
                activeChoice === choice
                  ? "choice-button active"
                  : "choice-button"
              }
              onClick={() => setActiveChoice(choice)}
            >
              {choice}
            </div>
          ))}
        </div>
        <div className="property-choices-items">
          {filteredPropertyChoices.map(({ id, address, title, image }) => (
            <div className="property-choice-item" key={id}>
              <img src={image} alt="property choice" />
              <div>
                <small>{address}</small>
                <h2>{title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default PropertyChoices;

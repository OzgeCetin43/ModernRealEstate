import React from "react";

import hero from "../../assets/images/home-advertisement-hero.webp";
import { homeAdvertisements } from "../../assets/data/homeAdvertisements";
import Reveal from "../Reveal/Reveal";

import "./homeAdvertisement.scss";

const HomeAdvertisement: React.FC = () => {
  return (
    <div className="home-advertisement-container">
      <div className="home-advertisement-top-container">
        <div className="home-advertisement-top-left-container">
          <Reveal>
            <span className="home-advertisement-main-subtitle">
              Experience cozy living in every season
            </span>
          </Reveal>
          <Reveal>
            <h1 className="home-advertisement-main-title">
              This home could be your castle
            </h1>
          </Reveal>
        </div>
        <div className="home-advertisement-top-right-container">
          <Reveal>
            <p className="home-advertisement-main-description">
              This stunning beach house property is a true oasis, nestled in a
              serene coastal community with direct access to the beach. The home
              boasts breathtaking ocean views from every room and features a
              spacious, open floor plan that is perfect for entertaining guests.
              The interior is adorned with high-end finishes and designer
              touches, including beautiful hardwood floors, sleek stainless
              steel.
            </p>
          </Reveal>
        </div>
      </div>
      <div className="home-advertisement-bottom-container">
        <div className="home-advertisement-bottom-left-container">
          <Reveal>
            <img src={hero} alt="home advertisement" />
          </Reveal>
        </div>
        <div className="home-advertisement-bottom-right-container">
          <Reveal>
            <span className="home-advertisement-subtitle">
              Where form meets function
            </span>
          </Reveal>
          <Reveal>
            <h1 className="home-advertisement-title">
              Architectural Gem Serenity by Design
            </h1>
          </Reveal>
          <Reveal>
            <p className="home-advertisement-description">
              Step into coastal bliss with this remarkable beach house property.
              Embrace a lifestyle of sun, sea, and unparalleled relaxation in
              this exquisite coastal retreat.
            </p>
          </Reveal>
          <Reveal>
            <div className="home-advertisement-properties">
              {homeAdvertisements.map(({ id, icon, title, description }) => (
                <div key={id} className="home-advertisement-property">
                  <img src={icon} alt="home advertisement property" />
                  <p className="home-advertisement-property-title">{title}</p>
                  <small className="home-advertisement-property-description">
                    {description}
                  </small>
                </div>
              ))}
            </div>
          </Reveal>
          <button className="home-advertisement-button">Schedule Visit</button>
        </div>
      </div>
    </div>
  );
};

export default HomeAdvertisement;

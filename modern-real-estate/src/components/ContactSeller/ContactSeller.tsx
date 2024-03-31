import React from "react";
import { IoPhonePortrait } from "react-icons/io5";

import hero from "../../assets/images/contact-seller-hero.png";

import "./contactSeller.scss";

const ContactSeller: React.FC = () => {
  return (
    <div className="contact-seller-container">
      <div className="contact-seller-container-left">
        <h1 className="contact-seller-title">
          Find for your dream home and increase your investment opportunities
        </h1>
        <p className="contact-seller-description">
          We provide the most suitable and quality real estate. Showcase all
          your properties in a truly modern manner. Welcome to Jivux.
        </p>
        <div className="contact-seller-button-container">
          <IoPhonePortrait />
          <button>Contact Seller</button>
        </div>
      </div>
      <div className="contact-seller-container-right">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default ContactSeller;

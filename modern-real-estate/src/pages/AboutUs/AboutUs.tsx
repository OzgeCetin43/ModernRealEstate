import React from "react";

import Partner from "../../components/Partner/Partner";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import Companies from "../../components/Companies/Companies";

import "./aboutUs.scss";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container">
      <Partner />
      <AboutCompany />
      <Companies />
    </div>
  );
};

export default AboutUs;

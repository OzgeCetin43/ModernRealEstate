import React from "react";

import Partner from "../../components/Partner/Partner";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import Companies from "../../components/Companies/Companies";
import AboutTimeline from "../../components/AboutTimeline/AboutTimeline";
import Services from "../../components/Services/Services";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

import "./aboutUs.scss";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container">
      <Partner />
      <AboutCompany />
      <Companies />
      <AboutTimeline />
      <Services />
      <WhyChooseUs />
    </div>
  );
};

export default AboutUs;

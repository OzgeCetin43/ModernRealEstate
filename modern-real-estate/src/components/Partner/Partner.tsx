import React from "react";
import { motion } from "framer-motion";

import partner1 from "../../assets/images/partner-1.jpg";
import partner2 from "../../assets/images/partner-2.jpg";
import partner3 from "../../assets/images/partner-3.jpg";
import partner4 from "../../assets/images/partner-4.jpg";

import Reveal from "../Reveal/Reveal";

import "./partner.scss";

const easing = [0.6, -0.05, 0.01, 0.99];

const Partner: React.FC = () => {
  return (
    <motion.div
      className="partner-container"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: easing }}
    >
      <div className="partner-container-left">
        <Reveal>
          <h1 className="partner-title">
            We are your partner in creating a legacy building facade.
          </h1>
        </Reveal>
        <Reveal>
          <p className="partner-description">
            We are one of the leading developers in europe providing exquisitely
            designed modern living villas in unique locations. We have made out
            quality development an hallmark by incorporating the latest in
            contemporary architecture to suit your tastes and budget.
          </p>
        </Reveal>
      </div>
      <div className="partner-container-right">
        <div className="grid-wrapper">
          <div className="wide">
            <img src={partner1} alt="partner" />
          </div>
          <div className="tall">
            <img src={partner2} alt="partner" />
          </div>
          <div className="big">
            <img src={partner3} alt="partner" />
          </div>
          <div>
            <img src={partner4} alt="partner" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Partner;

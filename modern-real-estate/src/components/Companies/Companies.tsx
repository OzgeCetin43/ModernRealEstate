import React from "react";
import { motion } from "framer-motion";

import company1 from "../../assets/images/company-1.webp";
import company2 from "../../assets/images/company-2.webp";
import company3 from "../../assets/images/company-3.webp";
import company4 from "../../assets/images/company-4.webp";
import company5 from "../../assets/images/company-5.webp";
import company6 from "../../assets/images/company-6.webp";
import Reveal from "../Reveal/Reveal";

import "./companies.scss";

const easing = [0.6, -0.05, 0.01, 0.99];

const Companies: React.FC = () => {
  return (
    <motion.div
      className="companies-container"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: easing }}
    >
      <h4 className="companies-container-title">Trusted by the world’s best</h4>
      <div className="company-list">
        <Reveal>
          <img src={company1} alt="companies" />
        </Reveal>
        <Reveal>
          <img src={company2} alt="companies" />
        </Reveal>
        <Reveal>
          <img src={company3} alt="companies" />
        </Reveal>
        <Reveal>
          <img src={company4} alt="companies" />
        </Reveal>
        <Reveal>
          <img src={company5} alt="companies" />
        </Reveal>
        <Reveal>
          <img src={company6} alt="companies" />
        </Reveal>
      </div>
    </motion.div>
  );
};

export default Companies;

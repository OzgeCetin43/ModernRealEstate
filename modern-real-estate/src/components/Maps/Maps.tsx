import React from "react";
import { motion } from "framer-motion";

import { maps } from "../../assets/data/maps";

import "./maps.scss";

const easing = [0.6, -0.05, 0.01, 0.99];

const Maps: React.FC = () => {
  return (
    <motion.div
      className="maps-container"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: easing }}
    >
      {maps.map(({ id, image }) => (
        <img key={id} src={image} alt="map" />
      ))}
    </motion.div>
  );
};

export default Maps;

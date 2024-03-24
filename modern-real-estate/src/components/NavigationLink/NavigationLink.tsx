import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { slide } from "../../assets/animations/animations";

type NavigationLinkProps = {
  link: {
    id: number;
    label: string;
    href: string;
  };
};

const NavigationLink: React.FC<NavigationLinkProps> = ({
  link: { id, label, href },
}) => {
  return (
    <motion.div
      key={id}
      custom={id}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      className="link"
    >
      <Link to={href}>{label}</Link>
    </motion.div>
  );
};

export default NavigationLink;

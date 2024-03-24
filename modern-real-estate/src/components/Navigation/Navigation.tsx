import React from "react";
import { motion } from "framer-motion";

import NavigationLink from "../NavigationLink/NavigationLink";

import { links } from "../../assets/data/links";
import { socialMediaAccounts } from "../../assets/data/socialMediaAccounts";
import { menuSlide } from "../../assets/animations/animations";

import logo from "../../assets/images/logo.svg";

import "./navigation.scss";

const Navigation: React.FC = () => {
  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className="menu"
    >
      <div className="menu-body">
        <div className="header">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <nav className="navigation">
          {links.map((link) => (
            <NavigationLink link={link} />
          ))}
        </nav>
        <div className="footer">
          {socialMediaAccounts.map(({ id, image }) => (
            <img key={id} src={image} alt="social media account" />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Navigation;

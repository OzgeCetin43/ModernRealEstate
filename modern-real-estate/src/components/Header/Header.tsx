import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navigation from "../Navigation/Navigation";

import logo from "../../assets/images/logo.svg";

import "./header.scss";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div
        className="navigation-button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Menu
      </div>
      <AnimatePresence>{isOpen ? <Navigation /> : null}</AnimatePresence>
    </div>
  );
};

export default Header;

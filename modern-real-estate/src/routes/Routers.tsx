import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
};

export default Routers;

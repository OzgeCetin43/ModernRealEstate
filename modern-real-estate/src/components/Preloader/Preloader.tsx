import React from "react";

import logo from "../../assets/images/logo.svg";

import "./preloader.scss";

const Preloader: React.FC = () => {
  return (
    <div className="preloader-container">
      <img src={logo} alt="logo" />
      <div className="preloader">
        <div className="pl1">
          <div className="pl1__a"></div>
          <div className="pl1__b"></div>
          <div className="pl1__c"></div>
        </div>

        <div className="pl2">
          <div className="pl2__a"></div>
          <div className="pl2__b"></div>
          <div className="pl2__c"></div>
        </div>

        <div className="pl3">
          <div className="pl3__a"></div>
          <div className="pl3__b"></div>
          <div className="pl3__c"></div>
          <div className="pl3__d"></div>
        </div>

        <div className="pl4">
          <div className="pl4__a"></div>
          <div className="pl4__b"></div>
          <div className="pl4__c"></div>
          <div className="pl4__d"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

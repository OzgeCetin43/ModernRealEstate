import React from "react";

import partner1 from "../../assets/images/partner-1.jpg";
import partner2 from "../../assets/images/partner-2.jpg";
import partner3 from "../../assets/images/partner-3.jpg";
import partner4 from "../../assets/images/partner-4.jpg";

import "./partner.scss";

const Partner: React.FC = () => {
  return (
    <div className="partner-container">
      <div className="partner-container-left">
        <h1 className="partner-title">
          We are your partner in creating a legacy building facade.
        </h1>
        <p className="partner-description">
          We are one of the leading developers in europe providing exquisitely
          designed modern living villas in unique locations. We have made out
          quality development an hallmark by incorporating the latest in
          contemporary architecture to suit your tastes and budget.
        </p>
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
    </div>
  );
};

export default Partner;

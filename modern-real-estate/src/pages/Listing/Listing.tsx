import React from "react";

import ListingProperty from "../../components/ListingProperty/ListingProperty";
import ValuableClients from "../../components/ValuableClients/ValuableClients";

import "./listing.scss";

const Listing: React.FC = () => {
  return (
    <div className="listing-container">
      <ListingProperty />
      <ValuableClients />
    </div>
  );
};

export default Listing;

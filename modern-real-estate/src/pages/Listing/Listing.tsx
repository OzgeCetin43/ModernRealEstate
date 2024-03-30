import React from "react";

import ListingProperty from "../../components/ListingProperty/ListingProperty";
import ValuableClients from "../../components/ValuableClients/ValuableClients";
import ListingContact from "../../components/ListingContact/ListingContact";
import ContactSeller from "../../components/ContactSeller/ContactSeller";

import "./listing.scss";

const Listing: React.FC = () => {
  return (
    <div className="listing-container">
      <ListingProperty />
      <ValuableClients />
      <ListingContact />
      <ContactSeller />
    </div>
  );
};

export default Listing;

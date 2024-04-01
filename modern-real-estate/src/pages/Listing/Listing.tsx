import React from "react";

import ListingProperty from "../../components/ListingProperty/ListingProperty";
import Maps from "../../components/Maps/Maps";
import ValuableClients from "../../components/ValuableClients/ValuableClients";
import ListingContact from "../../components/ListingContact/ListingContact";
import ContactSeller from "../../components/ContactSeller/ContactSeller";
import Choose from "../../components/Choose/Choose";
import PropertyChoices from "../../components/PropertyChoices/PropertyChoices";

import "./listing.scss";

const Listing: React.FC = () => {
  return (
    <div className="listing-container">
      <ListingProperty />
      <Maps />
      <ValuableClients />
      <ListingContact />
      <ContactSeller />
      <Choose />
      <PropertyChoices />
    </div>
  );
};

export default Listing;

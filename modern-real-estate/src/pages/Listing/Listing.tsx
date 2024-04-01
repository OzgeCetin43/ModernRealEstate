import React from "react";

import ListingProperty from "../../components/ListingProperty/ListingProperty";
import Maps from "../../components/Maps/Maps";
import PropertyChoices from "../../components/PropertyChoices/PropertyChoices";
import ValuableClients from "../../components/ValuableClients/ValuableClients";
import ListingContact from "../../components/ListingContact/ListingContact";
import ContactSeller from "../../components/ContactSeller/ContactSeller";
import Choose from "../../components/Choose/Choose";

import "./listing.scss";

const Listing: React.FC = () => {
  return (
    <div className="listing-container">
      <ListingProperty />
      <Maps />
      <PropertyChoices />
      <ValuableClients />
      <ListingContact />
      <ContactSeller />
      <Choose />
    </div>
  );
};

export default Listing;

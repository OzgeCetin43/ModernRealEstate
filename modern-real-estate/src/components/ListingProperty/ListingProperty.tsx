import React from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { IoIosBed } from "react-icons/io";
import { FaShower, FaBookmark } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

import { listingProperty } from "../../assets/data/listingProperty";

import ListPropertyFilter from "../ListPropertyFilter/ListPropertyFilter";

import "leaflet/dist/leaflet.css";
import "./listingProperty.scss";
import marker from "leaflet/dist/images/marker-icon.png";

const easing = [0.6, -0.05, 0.01, 0.99];

const ListingProperty: React.FC = () => {
  const icon = new L.Icon({
    iconUrl: marker,
  });

  return (
    <motion.div
      className="listing-property-container"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: easing }}
    >
      <div className="listing-property-container-left">
        <h2 className="search-title">
          Search results for <span>London</span>
        </h2>
        <ListPropertyFilter />
        <div className="property-items">
          {listingProperty.map(
            ({
              id,
              title,
              image,
              bedroom,
              bathroom,
              price,
              address,
              badge,
            }) => (
              <div key={id} className="property-item">
                <div className="property-item-left">
                  <img src={image} alt="property" />
                  {badge ? <small>{badge}</small> : null}
                </div>
                <div className="property-item-right">
                  <h1 className="property-title">{title}</h1>
                  <small className="property-address">{address}</small>
                  <p className="property-price">${price}</p>
                  <div className="property-item-features-container">
                    <div className="feature-container-left">
                      <div className="feature-inner-container">
                        <div>
                          <IoIosBed />
                          <span>Bedroom: {bedroom}</span>
                        </div>
                        <div>
                          <FaShower />
                          <span>Bathroom: {bathroom}</span>
                        </div>
                      </div>
                    </div>
                    <div className="feature-container-right">
                      <div>
                        <FaBookmark />
                      </div>
                      <div>
                        <RiWhatsappFill />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="listing-property-container-right">
        <MapContainer
          center={[52.4797, -1.90269]}
          zoom={7}
          scrollWheelZoom={false}
          className="map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {listingProperty.map(
            ({ id, title, image, bedroom, price, latitude, longitude }) => (
              <Marker key={id} position={[latitude, longitude]} icon={icon}>
                <Popup>
                  <img
                    className="property-marker-image"
                    src={image}
                    alt="property"
                  />
                  <h1 className="property-marker-title">{title}</h1>
                  <p className="property-marker-price">${price}</p>
                  <small className="property-marker-info">
                    Bedroom: <span>{bedroom}</span>
                  </small>
                </Popup>
              </Marker>
            )
          )}
        </MapContainer>
      </div>
    </motion.div>
  );
};

export default ListingProperty;

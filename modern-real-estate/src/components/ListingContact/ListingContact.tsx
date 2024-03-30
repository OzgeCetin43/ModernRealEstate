import React from "react";
import { IoLocation, IoPhonePortrait } from "react-icons/io5";
import { IoIosMailUnread } from "react-icons/io";

import Reveal from "../Reveal/Reveal";

import "./listingContact.scss";

const ListingContact: React.FC = () => {
  return (
    <Reveal>
      <div className="listing-contact-container">
        <h1 className="listing-contact-title">
          We provide the most suitable and quality real estate.
        </h1>
        <p className="listing-contact-description">
          Jivux is committed to delivering a high level of expertise, customer
          service, and attention to detail to the marketing and sales of luxury
          real estate, and rental properties.
        </p>
        <div className="listing-contact-info-container">
          <div className="contact-info-item">
            <IoLocation />
            <div>
              <h3>Office Address</h3>
              <p>Turkey, IZMIR, Uçyol</p>
            </div>
          </div>
          <div className="contact-info-item">
            <IoPhonePortrait />
            <div>
              <h3>Request a call back</h3>
              <p>0000-000-00-00</p>
            </div>
          </div>
          <div className="contact-info-item">
            <IoIosMailUnread />
            <div>
              <h3>Email us</h3>
              <p>support@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <form>
            <div className="form-row">
              <div className="form-column">
                <div>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="form-column">
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-column">
                <div>
                  <label htmlFor="propertyType">Property Type</label>
                  <select name="propertyType" id="propertyType">
                    <option value="">Choose</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="rent">Rent</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                rows={10}
                name="message"
                id="message"
                placeholder="Your Message"
              />
            </div>
          </form>
          <button type="button">Send Request</button>
        </div>
      </div>
    </Reveal>
  );
};

export default ListingContact;

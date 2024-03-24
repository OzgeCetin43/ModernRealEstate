import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoSearchOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

import Reveal from "../Reveal/Reveal";

import "./hero.scss";

const easing = [0.6, -0.05, 0.01, 0.99];

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("buy");

  return (
    <motion.div
      className="hero-background"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: easing }}
    >
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-title">
            <Reveal>
              <p>
                Find a <span>place</span> where you can be yourself.
              </p>
            </Reveal>
          </div>
          <div className="hero-description">
            <Reveal>
              If you're looking for a place where you can be yourself, do't give
              up. Keep searching until you find a place that feels like a home.
            </Reveal>
          </div>
          <div className="hero-reviews">
            <Reveal>
              <p className="reviews-text">100+ Reviews</p>
            </Reveal>
            <div className="star-container">
              <Reveal>
                <span>
                  <FaStar />
                </span>
              </Reveal>
              <Reveal>
                <span>
                  <FaStar />
                </span>
              </Reveal>{" "}
              <Reveal>
                <span>
                  <FaStar />
                </span>
              </Reveal>{" "}
              <Reveal>
                <span>
                  <FaStar />
                </span>
              </Reveal>{" "}
              <Reveal>
                <span>
                  <FaStar />
                </span>
              </Reveal>
            </div>
            <Reveal>
              <p className="reviews-description">
                More than 500+ people talking services.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <div className="hero-content-actions">
              <Link to="/properties">View Property</Link>
              <Link to="/properties">Contact Us</Link>
            </div>
          </Reveal>
        </div>
        <div className="hero-form-wrapper">
          <div className="form-tab">
            <button
              className={
                activeTab === "buy" ? "tab-button active" : "tab-button"
              }
              onClick={() => setActiveTab("buy")}
            >
              Buy
            </button>
            <button
              className={
                activeTab === "sell" ? "tab-button active" : "tab-button"
              }
              onClick={() => setActiveTab("sell")}
            >
              Sell
            </button>
            <button
              className={
                activeTab === "rent" ? "tab-button active" : "tab-button"
              }
              onClick={() => setActiveTab("rent")}
            >
              Rent
            </button>
          </div>
          <form action="" className="hero-form">
            <div className="input-wrapper">
              <label htmlFor="search" className="input-label">
                Search: *
              </label>
              <div className="search-panel">
                <input
                  id="search"
                  name="search"
                  type="text"
                  placeholder="Search your home"
                  required
                  className="input-field"
                />
                <IoSearchOutline />
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="category" className="input-label">
                Select Categories:
              </label>
              <select id="category" name="category" className="dropdown-list">
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="offices">Offices</option>
                <option value="townhome">Townhome</option>
              </select>
            </div>
            <div className="input-wrapper">
              <label htmlFor="min-price" className="input-label">
                Min Price:
              </label>
              <select id="min-price" name="min-price" className="dropdown-list">
                <option value="min price">Min Price</option>
                <option value="500">500</option>
                <option value="1000">1000</option>
                <option value="2000">2000</option>
                <option value="3000">3000</option>
                <option value="4000">4000</option>
                <option value="5000">5000</option>
                <option value="6000">6000</option>
              </select>
            </div>
            <div className="input-wrapper">
              <label htmlFor="max-price" className="input-label">
                Max Price:
              </label>
              <select id="max-price" name="max-price" className="dropdown-list">
                <option value="max price">Max Price</option>
                <option value="500">500</option>
                <option value="1000">1000</option>
                <option value="2000">2000</option>
                <option value="3000">3000</option>
                <option value="4000">4000</option>
                <option value="5000">5000</option>
                <option value="6000">6000</option>
              </select>
            </div>
          </form>
          <button type="submit" className="search-button">
            Search Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;

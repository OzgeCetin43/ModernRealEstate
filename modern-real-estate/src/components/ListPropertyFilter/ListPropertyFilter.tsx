import React from "react";

import "./listPropertyFilter.scss";

const ListPropertyFilter: React.FC = () => {
  return (
    <div className="list-property-filter-container">
      <form>
        <div className="form-row-container">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="City Location"
          />
        </div>
        <div className="form-row-container">
          <div className="form-column-container">
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
              <option value="">Any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className="form-column-container">
            <label htmlFor="property">Property</label>
            <select name="property" id="type">
              <option value="">Any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>
          <div className="form-column-container">
            <label htmlFor="minPrice">Min Price</label>
            <input
              type="number"
              name="minPrice"
              id="minPrice"
              placeholder="Any"
            />
          </div>
          <div className="form-column-container">
            <label htmlFor="maxPrice">Max Price</label>
            <input
              type="number"
              name="maxPrice"
              id="maxPrice"
              placeholder="Any"
            />
          </div>
          <div className="form-column-container">
            <label htmlFor="bedroom">Bedroom</label>
            <input
              type="number"
              name="bedroom"
              id="bedroom"
              placeholder="Any"
            />
          </div>
        </div>
        <div className="form-row-container">
          <button type="button">Search</button>
        </div>
      </form>
    </div>
  );
};

export default ListPropertyFilter;

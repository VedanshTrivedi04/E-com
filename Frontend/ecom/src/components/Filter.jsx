import React from "react";
import Button from 'react-bootstrap/Button';
const FilterBar = () => {
  return (<>
    <div className="container my-3">
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <div className="filters d-flex flex-wrap gap-2">
          <button className="btn btn-outline-secondary btn-sm">Headphone Type</button>
          <button className="btn btn-outline-secondary btn-sm">Price</button>
          <button className="btn btn-outline-secondary btn-sm">Review</button>
          <button className="btn btn-outline-secondary btn-sm">Color</button>
          <button className="btn btn-outline-secondary btn-sm">Material</button>
          <button className="btn btn-outline-secondary btn-sm">Offer</button>
          <button className="btn btn-outline-secondary btn-sm">All Filters</button>
        </div>
        <div>
          <select className="form-select form-select-sm">
            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  </>
  );
};

export default FilterBar;

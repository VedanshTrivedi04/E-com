import React from "react";
import Button from 'react-bootstrap/Button';

const Banner = () => {
  return (<>
    <div className="banner container my-4">
      <div className="row align-items-center bg-light rounded p-4">
        <div className="col-md-6">
          <h2 className="fw-bold">Grab Upto 50% Off On Selected Headphone</h2>
          <button className="btn btn-success mt-3">Buy Now</button>
        </div>
        <div className="col-md-6 text-center">
          <img src="https://via.placeholder.com/400x250" alt="Headphone Banner" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  </>
  );
};

export default Banner;

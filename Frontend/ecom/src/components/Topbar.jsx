import React from "react";
import Button from 'react-bootstrap/Button';

const Topbar = () => {
  return (
    <>
    <div className="topbar py-1 px-3 d-flex justify-content-between align-items-center">
      <div className="small">
        <i className="bi bi-telephone"></i> +001234567890
      </div>
      <div className="small">
        Get 50% Off on Selected Items | <a href="/" className="text-decoration-none text-white">Shop Now</a>
      </div>
      <div>
        <select className="form-select form-select-sm d-inline w-auto me-2">
          <option>Eng</option>
          <option>हिंदी</option>
        </select>
        <select className="form-select form-select-sm d-inline w-auto">
          <option>Location</option>
          <option>India</option>
          <option>USA</option>
        </select>
      </div>
    </div>
    </>
  );
};

export default Topbar;

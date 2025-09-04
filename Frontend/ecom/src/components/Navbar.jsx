import React from "react";
import Button from 'react-bootstrap/Button';

const Navbar = () => {
  return (<>
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3 text-success" href="/">Shopcart</a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><a className="nav-link" href="/">Categories</a></li>
            <li className="nav-item"><a className="nav-link" href="/">Deals</a></li>
            <li className="nav-item"><a className="nav-link" href="/">What's New</a></li>
            <li className="nav-item"><a className="nav-link" href="/">Delivery</a></li>
          </ul>

          <form className="d-flex me-3">
            <input className="form-control" type="search" placeholder="Search Product" />
          </form>

          <div>
            <Button text ='Account' />
          </div>            
          

        </div>
      </div>
    </nav>
  </>
  );
};

export default Navbar;

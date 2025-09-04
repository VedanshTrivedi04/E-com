import React from 'react'


const Header = () => {
  return (
    <>
 
      
      <div className="bg-success text-white text-center py-1 small">
        +001234567890 | Get 50% Off on Selected Items | Shop Now
      </div>

      
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <a className="navbar-brand text-success fw-bold" href="/">Shopcart</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#">Categories</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Deals</a></li>
              <li className="nav-item"><a className="nav-link" href="#">What's New</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Delivery</a></li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search Product" />
              <button className="btn btn-outline-success me-2">Account</button>
              
            </form>
          </div>
        </div>
      </nav>
   
    </>
  )
}

export default Header
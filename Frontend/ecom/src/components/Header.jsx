import React from 'react'
import { Link } from 'react-router-dom'  // ✅ for SPA navigation
import Button from 'react-bootstrap/Button'

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-success text-white text-center py-1 small">
        +001234567890 | Get 50% Off on Selected Items | Shop Now
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          {/* Brand */}
          <Link className="navbar-brand text-success fw-bold" to="/home ">Shopcart</Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/categories">Categories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/deals">Deals</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/new">What's New</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/delivery">Delivery</Link>
              </li>
            </ul>

            {/* Search & Account Button */}
            <form className="d-flex">

              <Button as={Link} to="/login" variant="outline-success" className="me-2">
                Account
              </Button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}



export default Header

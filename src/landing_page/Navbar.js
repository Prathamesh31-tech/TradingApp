import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navbarCollapse = useRef(null); // ref for the collapse div

  const handleNavLinkClick = () => {
    // Check if navbar is expanded
    if (navbarCollapse.current.classList.contains("show")) {
      // Use Bootstrap Collapse API to hide
      const collapseInstance = window.bootstrap.Collapse.getInstance(
        navbarCollapse.current,
      );
      if (collapseInstance) collapseInstance.hide();
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{
        background: "linear-gradient(90deg, #0f172a, #1e293b)",
        padding: "0",
        zIndex: "1000",
      }}
    >
      <div className="container">
        <Link
          onClick={handleNavLinkClick}
          className="navbar-brand d-flex align-items-center"
          to="/"
        >
          <img src="media/images/logo.png" alt="Logo" className="navbar-logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarContent"
          ref={navbarCollapse}
        >
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link
                className="nav-link nav-hover"
                to="/Signup"
                onClick={handleNavLinkClick}
              >
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link nav-hover"
                to="/About"
                onClick={handleNavLinkClick}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link nav-hover"
                to="/Product"
                onClick={handleNavLinkClick}
              >
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link nav-hover"
                to="/Pricing"
                onClick={handleNavLinkClick}
              >
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link nav-hover"
                to="/Support"
                onClick={handleNavLinkClick}
              >
                Support
              </Link>
            </li>

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <Link
                className="btn btn-primary px-4"
                to="/Login"
                onClick={handleNavLinkClick}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

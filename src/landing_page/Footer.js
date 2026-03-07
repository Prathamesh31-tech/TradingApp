import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="media/images/logo.png" alt="logo" />
            <p>© 2010-2024 Trading Platform Pvt Ltd.</p>
            <p>All rights reserved.</p>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <Link to="/About">About</Link>
            <Link to="/product">Products</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/pricing">Careers</Link>
            <Link to="/support">Press</Link>
          </div>

          <div className="footer-links">
            <h4>Support</h4>
            <Link to="/support">Contact</Link>
            <Link to="/support">Support Portal</Link>
            <Link to="/support">Downloads</Link>
            <Link to="/support">Resources</Link>
          </div>

          <div className="footer-links">
            <h4>Account</h4>
            <Link to="/signup">Open Account</Link>
            <Link to="/login">Fund Transfer</Link>
            <Link to="/signup">Trading Guide</Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="footer-disclaimer">
          <p>
            Investments in securities market are subject to market risks. Please
            read all related documents carefully before investing.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="footer-bottom">
          <Link to="/about">Terms</Link>
          <Link to="/about">Privacy Policy</Link>
          <Link to="/about">Disclosure</Link>
          <Link to="/about">Investor Charter</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

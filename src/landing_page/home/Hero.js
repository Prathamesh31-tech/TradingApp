import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <img src="media/images/img5.png" alt="trading" className="hero-image" />

        <h1 className="hero-title">Trade Smarter, Invest Better</h1>

        <p className="hero-text">
          A modern trading platform to buy and sell stocks, track markets, and
          manage your investments easily.
        </p>

        <Link to="/Signup">
          <button className="hero-btn">Start Trading</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;

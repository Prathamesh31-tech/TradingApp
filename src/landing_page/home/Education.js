import React from "react";
import { Link } from "react-router-dom";
function Education() {
  return (
    <div className="home-card education-section">
      <div className="education-grid">
        <div>
          <img
            src="media/images/education.svg"
            className="education-img"
            alt="education"
          />
        </div>

        <div className="education-content">
          <h2>Learn trading and investing</h2>

          <p>
            Explore educational resources to understand stock markets, trading
            strategies, and investment techniques.
          </p>

          <Link to="/education" className="education-link">
            Trading Guide →
          </Link>

          <p className="education-mt">
            Join our community to discuss trading ideas and market trends.
          </p>

          <Link to="/education-details" className="education-link">
            Community Forum →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Education;

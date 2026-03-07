import React from "react";

function Awards() {
  return (
    <div className="home-card awards-section">
      <div className="awards-grid">
        <div>
          <img
            src="media/images/img1.png"
            className="awards-img"
            alt="Trading Platform"
          />
        </div>

        <div className="awards-content">
          <h2>Powerful Trading Platform</h2>

          <p>
            Our trading application provides fast, secure, and user-friendly
            tools for investors and traders to track markets and execute trades
            efficiently.
          </p>

          <div className="awards-lists">
            <ul>
              <li>Real-time market data</li>
              <li>Advanced trading charts</li>
              <li>Portfolio tracking</li>
            </ul>

            <ul>
              <li>Watchlist management</li>
              <li>Easy order execution</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;

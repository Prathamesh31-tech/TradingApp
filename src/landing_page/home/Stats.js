import React from "react";

function Stats() {
  return (
    <div className="home-card stats-section">
      <div className="stats-grid">
        <div className="stats-content">
          <h2>Why choose our trading platform?</h2>

          <h4>User-friendly interface</h4>
          <p>
            Designed for both beginners and experienced traders to trade easily
            with a simple and intuitive interface.
          </p>

          <h4>Secure transactions</h4>
          <p>
            Advanced security systems ensure safe trading and data protection.
          </p>

          <h4>Real-time market updates</h4>
          <p>Stay updated with live stock prices, charts, and market trends.</p>

          <h4>Portfolio management</h4>
          <p>Track your investments, profits, and losses in one dashboard.</p>
        </div>

        <div className="stats-image">
          <img src="media/images/img3.png" alt="Trading ecosystem" />
        </div>
      </div>
    </div>
  );
}

export default Stats;

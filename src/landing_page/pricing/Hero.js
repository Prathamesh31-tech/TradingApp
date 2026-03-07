export default function Hero() {
  return (
    <div className="pricing-hero">
      <h1>Trading App Pricing</h1>

      <p className="mt-3 fs-5">
        Simple, transparent and affordable pricing for modern traders.
      </p>

      <p className="mt-2">
        Our trading platform provides low brokerage fees and zero hidden
        charges, making it easy for users to invest and trade in the stock
        market.
      </p>

      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-md-4 col-12 pricing-feature p-4">
            <img src="media/images/pricingEquity.svg" alt="image" />

            <h3>Zero Delivery Charges</h3>

            <p>
              All long term equity investments are completely free with zero
              brokerage charges.
            </p>
          </div>

          <div className="col-md-4 col-12 pricing-feature p-4">
            <img src="media/images/intradayTrades.svg" alt="image" />

            <h3>Low Intraday Fees</h3>

            <p>
              Flat ₹20 per trade for intraday trading with advanced analytics
              and fast order execution.
            </p>
          </div>

          <div className="col-md-4 col-12 pricing-feature p-4">
            <img src="media/images/pricingEquity.svg" alt="image" />

            <h3>Mutual Fund Investment</h3>

            <p>
              Invest in mutual funds without commission and manage all
              investments in one dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

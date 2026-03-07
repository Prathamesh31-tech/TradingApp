import { Link } from "react-router-dom";

export default function Universe() {
  return (
    <div className="container universe-section">
      <h2>Trading App Ecosystem</h2>

      <p className="mt-3 fs-5">
        Our trading platform includes multiple tools designed to enhance
        investment experience and market analysis.
      </p>

      <div className="row mt-5">
        <div className="col-md-4 col-12 universe-card p-4">
          <img
            src="media/images/img4.png"
            alt="Universe product illustration 1"
          />
          <p className="mt-3">
            Real-time trading dashboard showing portfolio performance,
            profit/loss insights and market trends.
          </p>
        </div>

        <div className="col-md-4 col-12 universe-card p-4">
          <img
            src="media/images/img1.png"
            alt="Universe product illustration 2"
          />
          <p className="mt-3">
            Advanced analytics and charts to help users analyze stocks and make
            better investment decisions.
          </p>
        </div>

        <div className="col-md-4 col-12 universe-card p-4">
          <img
            src="media/images/imh6.png"
            alt="Universe product illustration 3"
          />
          <p className="mt-3">
            Secure authentication and transaction system ensuring safe trading
            experience for all users.
          </p>
        </div>
      </div>

      <Link to="/Signup">
        <button
          className="btn btn-primary mt-5"
          style={{ padding: "12px 30px" }}
        >
          Start Trading
        </button>
      </Link>
    </div>
  );
}

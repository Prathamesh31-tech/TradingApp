import "./SupportPage.css";

export default function SupportPage() {
  return (
    <section className="container-fluid support-section py-5">
      <div className="text-center mb-5">
        <h1 className="support-title">Support Center</h1>
        <p className="support-subtitle">
          Get help with your trading account, payments, and platform features.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6 col-md-4 ticket-card">
            <h5>
              <i className="fa fa-user-circle"></i> Account Help
            </h5>
            <p className="ticket-desc">
              Manage your account details, login problems, and KYC updates.
            </p>

            <a href="/">Open Trading Account</a>
            <a href="/">Update KYC details</a>
            <a href="/">Login issues</a>
            <a href="/">Account verification</a>
          </div>

          <div className="col-6 col-md-4 ticket-card">
            <h5>
              <i className="fa fa-line-chart"></i> Trading Issues
            </h5>
            <p className="ticket-desc">
              Resolve order execution problems and trading related queries.
            </p>

            <a href="/">Placing buy or sell orders</a>
            <a href="/">Intraday trading</a>
            <a href="/">Order delay</a>
            <a href="/">Margin information</a>
          </div>

          <div className="col-6 col-md-4 ticket-card">
            <h5>
              <i className="fa fa-money"></i> Payments
            </h5>
            <p className="ticket-desc">
              Add funds, withdraw balance, or check transaction history.
            </p>

            <a href="/">Add trading funds</a>
            <a href="/">Withdraw balance</a>
            <a href="/">Transaction history</a>
            <a href="/">Payment failures</a>
          </div>

          <div className="col-6 col-md-4 ticket-card">
            <h5>
              <i className="fa fa-bar-chart"></i> Portfolio
            </h5>
            <p className="ticket-desc">
              Track your investments and analyze stock performance.
            </p>

            <a href="/">Track investments</a>
            <a href="/">Portfolio analytics</a>
            <a href="/">Stock performance</a>
            <a href="/">Investment reports</a>
          </div>

          <div className="col-6 col-md-4 ticket-card">
            <h5>
              <i className="fa fa-cog"></i> Platform Help
            </h5>
            <p className="ticket-desc">
              Learn how to use the dashboard, charts, and trading tools.
            </p>

            <a href="/">Dashboard navigation</a>
            <a href="/">Mobile app guide</a>
            <a href="/">Trading tools</a>
            <a href="/">Chart indicators</a>
          </div>

          <div className="col-6 col-md-4 ticket-card">
            <h5>
              <i className="fa fa-shield"></i> Security
            </h5>
            <p className="ticket-desc">
              Protect your account with security settings and password reset.
            </p>

            <a href="/">Reset password</a>
            <a href="/">Two factor authentication</a>
            <a href="/">Account safety tips</a>
            <a href="/">Report suspicious activity</a>
          </div>
        </div>
      </div>
    </section>
  );
}

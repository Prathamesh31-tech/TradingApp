import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://tradingapp-backend-5z66.onrender.com/login",
        form,
        { withCredentials: true },
      );

      // Login successful
      window.location.href = "https://trading-app-dashboard-ten.vercel.app/";
    } catch (error) {
      // Backend se aaya hua message
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(`Login Failed ❌: ${error.response.data.message}`);
      } else {
        alert("Login Failed ❌: Server Error");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Trading Platform Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="signup-text">
          No account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

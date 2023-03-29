import React from "react";
import logo from "../assets/logo.png";
import "../style/login/login.css";
const Login = () => {
  return (
    <div className="login-section">
      <div className="login-container">
        <div className="left-side">
          <img src={logo} alt="logo" />
        </div>
        <div className="right-side">
          <h2>Hello</h2>
          <p>Before you continue please login</p>
          <label htmlFor="email">
            <p>Email</p>
          </label>
          <input placeholder="Email" id="email" name="email" />
          <label htmlFor="password">
            <p>Password</p>
          </label>
          <input placeholder="Password" id="password" name="password" />
          <button className="login-btn">Login</button>
          <p className="dont-have-acc">
            Don't have account? <span>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

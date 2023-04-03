import axios from "axios";
import React from "react";

const Signin = ({ handleSignUp }) => {
  return (
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
        Don't have account? <span onClick={() => handleSignUp()}>Sign up</span>
      </p>
    </div>
  );
};

export default Signin;

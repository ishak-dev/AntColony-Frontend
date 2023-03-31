import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../style/login/login.css";
import Signin from "../components/login/signin";
import Signup from "../components/login/signup";
const Login = () => {
  const [openSignUp, setOpenSignUp] = useState(false);

  const handleSignUpIn = () => {
    setOpenSignUp((prevState) => !prevState);
  };
  return (
    <div className="login-section">
      <div className="login-container">
        <div className="left-side">
          <img src={logo} alt="logo" />
        </div>

        {!openSignUp ? (
          <Signin handleSignUp={handleSignUpIn} />
        ) : (
          <Signup handleSignIn={handleSignUpIn} />
        )}
      </div>
    </div>
  );
};

export default Login;

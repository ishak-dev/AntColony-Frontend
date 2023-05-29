import React, { useState } from "react";

import logo from "../assets/logo.png";
import "../style/login/login.css";
import Signin from "../components/login/signin";
import Signup from "../components/login/signup";

/*
Login or register page it depends from route, if signup is enabled it will display register form, otherwise it will
display login page. Register form is displayed in signup component that is in "components/login" folder,
also there is login form which is represented as signin component
*/
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = ({ handleSignUp }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleUserData = (event) => {
    setUserData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  };

  const handleRedirect = () => {
    console.log("redirect");
  };
  const signInUser = (e) => {
    e.preventDefault();
    console.log("procesiing");
    console.log(userData);

    axios
      .post("http://localhost:5000/api/users/login", userData)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };
  return (
    <div className="right-side">
      <h2>Hello</h2>
      <p>Before you continue please login</p>
      <label htmlFor="email">
        <p>Email</p>
      </label>
      <input
        placeholder="Email"
        id="email"
        name="email"
        onChange={handleUserData}
      />
      <label htmlFor="password">
        <p>Password</p>
      </label>
      <input
        placeholder="Password"
        id="password"
        name="password"
        onChange={handleUserData}
      />
      <button className="login-btn" type="submit" onClick={signInUser}>
        Login
      </button>
      <p className="dont-have-acc">
        Don't have account? <span onClick={() => handleSignUp()}>Sign up</span>
      </p>
    </div>
  );
};

export default Signin;

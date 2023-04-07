import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
const Signup = ({ handleSignIn }) => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });
  const [passHide, setPassHide] = useState(true);

  const handleUserData = (event) => {
    setUserData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  };

  function signUpUser() {
    console.log("procesiing");
    console.log(userData);
    axios
      .post("http://localhost:5000/api/users/register", userData)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
      });
  }

  const handleHide = () => {
    setPassHide((prevState) => !prevState);
  };
  return (
    <div className="right-side">
      <h2>Welcome!</h2>
      <p>Please fill all fields</p>

      <label htmlFor="name">
        <p>Name</p>
      </label>
      <input
        placeholder="Name"
        id="name"
        name="first_name"
        onChange={handleUserData}
      />
      <label htmlFor="surname">
        <p>Surname</p>
      </label>
      <input
        placeholder="Surname"
        id="surname"
        name="last_name"
        onChange={handleUserData}
      />
      <label htmlFor="username">
        <p>Username</p>
      </label>
      <input
        placeholder="Username"
        id="username"
        name="username"
        onChange={handleUserData}
      />
      <label htmlFor="email">
        <p>Email</p>
      </label>
      <input
        placeholder="Email"
        id="email"
        name="email"
        onChange={handleUserData}
      />
      <div className="input-field">
        <label htmlFor="password">
          <p>Password</p>
        </label>
        <input
          placeholder="Password"
          id="password"
          name="password"
          type={passHide ? "password" : "text"}
          onChange={handleUserData}
        />
        {passHide ? (
          <AiOutlineEyeInvisible
            className="password-icon"
            onClick={handleHide}
          />
        ) : (
          <AiOutlineEye className="password-icon" onClick={handleHide} />
        )}
      </div>
      <label htmlFor="repeat-password">
        <p>Repeat password</p>
      </label>
      <input
        placeholder="Repeat password"
        id="repeat-password"
        name="repeat-password"
        type={passHide ? "password" : "text"}
      />

      <button className="login-btn" onClick={signUpUser}>
        Register
      </button>
      <p className="dont-have-acc">
        Already have account?{" "}
        <span onClick={() => handleSignIn()}>Sign in</span>
      </p>
    </div>
  );
};

export default Signup;

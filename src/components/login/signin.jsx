import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

/*
Signin form. We defined states for pickuping data that user enter into inputs. After login/signin button is clicked, api is
called for checking credentials. If it is good we will be redirected to user dashboard (token which we get from api resolve is stroed in localStorage)
 
*/
const Signin = ({ handleSignUp }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [passHide, setPassHide] = useState(true);

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

  const handleHide = () => {
    setPassHide((prevState) => !prevState);
  };

  return (
    <div className="right-side">
      <h2>Hello</h2>
      <p>Before you continue please login</p>
      <label htmlFor="email">
        <p>Email</p>
      </label>
      <div className="input-field">
        <input
          placeholder="Email"
          id="email"
          name="email"
          onChange={handleUserData}
        />
      </div>
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

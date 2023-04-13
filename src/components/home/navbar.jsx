import React from "react";
import logo from "../../assets/logo.png";
import "../../style/home/navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="logo-navbar">
          <img src={logo} alt="logo" />
        </li>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>
          <button className="login-btn navbar-btn">Login</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

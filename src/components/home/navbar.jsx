import React from "react";
import logo from "../../assets/logo.png";
import "../../style/home/navbar.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="logo-navbar">
          <img src={logo} alt="logo" />
        </li>
        <li>
          <ScrollLink to="home" spy={true} smooth={true}>
            {" "}
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" spy={true} smooth={true}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="service" spy={true} smooth={true}>
            Service
          </ScrollLink>
        </li>
        <li>
          <button className="login-btn navbar-btn">
            <Link to="/login">Login</Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

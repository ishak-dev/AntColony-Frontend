import React from "react";
import logo from "../../assets/logo.png";
import "../../style/home/navbar.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
/*
this is navbar used for landing page, only button is used to route to another page which is login other navigation elements
are used to scroll to specific elements (Because it is scroll navigation you dont need to specify this components in routes, 
  but every component need to have ID) 
*/
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
            Features
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="tutorial" spy={true} smooth={true}>
            Tutorial
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

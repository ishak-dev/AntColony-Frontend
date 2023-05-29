import React from "react";
import logo from "../../assets/logo.png";
import "../../style/home/navbar.css";
import { Link } from "react-router-dom";

/*
This is navigation that is displayed after user is successfully logged in 
and this navigation is part of dashboard page which is in /pages folder
it is used to gro from page to page (page that are declared beside Link tag)
*/
const NavbarDashboard = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="logo-navbar">
          <img src={logo} alt="logo" />
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/addproject">Add New Project</Link>
        </li>
        <li>
          <Link to="/dashboard/executeproject">Execute Project</Link>
        </li>

        <li>
          <button
            className="login-btn navbar-btn"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavbarDashboard;

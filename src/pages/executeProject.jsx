import React from "react";
import NavbarDashboard from "../components/dashboard/navbarDashboard";
import "../style/dashboard/executeproject.css";

/*
example of execute project page that is used by user (when user logs in)
*/
const ExecuteProject = () => {
  return (
    <div>
      <NavbarDashboard />
      ExecuteProject
      <div className="executeproject-dashboard"></div>
    </div>
  );
};

export default ExecuteProject;

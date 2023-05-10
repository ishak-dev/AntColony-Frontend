import React from "react";
import NavbarDashboard from "../components/dashboard/navbarDashboard";
import "../style/dashboard/dashboard.css";
const Dashboard = () => {
  return (
    <div>
      <NavbarDashboard />
      Home
      <div className="dashboard-section"></div>
    </div>
  );
};

export default Dashboard;

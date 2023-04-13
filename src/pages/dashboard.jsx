import React from "react";

const Dashboard = () => {
  return (
    <div>
      Home
      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

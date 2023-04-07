import React from "react";

const Home = () => {
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

export default Home;

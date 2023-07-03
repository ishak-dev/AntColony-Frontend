import React from "react";
import tutorial from "../../assets/tutorial.jpg";
import "../../style/home/tutorial.css";

const Tutorial = () => {
    return (
      <div className="tutorial">
        <img src={tutorial} alt="Tutorial" className="tutorial-image" />
      </div>
    );
  };
  

export default Tutorial;

import React from "react";
import "../../style/home/about-us.css";
const About = () => {
  return (
    <div className="about-us" id="about">
      <h1>ABOUT US</h1>
      <p>
      At WrokerAnt, we have collaborated with AntColony to develop a robust Case Study: 
      a fully-functional CI/CD web application. Our objective was to create a seamless and efficient 
      development process for our clients. This application enables the smooth execution of various 
      stages, including repository copying, app building, test running, and project deployment. To simplify 
      the configuration process, we have incorporated a user-friendly Domain Specific Language (DSL) written 
      in JSON. This DSL empowers users to effortlessly edit their pipeline configurations while offering developers 
      the flexibility to manipulate the pipeline as required.
      </p>
    </div>
  );
};

export default About;

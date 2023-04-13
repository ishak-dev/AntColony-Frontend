import React from "react";
import webIcon from "../../assets/web-icon1.svg";
import "../../style/home/home-container.css";
const HomeSection = () => {
  return (
    <div className="home-section">
      <div className="home-section-description">
        <h1>Manage Your Pipelines</h1>
        <p>
          AD ASKDB KAsbd kabsd kabsd kabndk baksd askdaoj sdasjdbnka sbn AD
          ASKDB KAsbd kabsd kabsd kabndk baksd askdaoj sdasjdbnka sbnAD ASKDB
          KAsbd kabsd kabsd kabndk baksd askdaoj sdasjdbnka sbnAD ASKDB KAsbd
          kabsd kabsd kabndk baksd askdaoj sdasjdbnka sbnAD ASKDB KAsbd kabsd
          kabsd kabndk baksd askdaoj sdasjdbnka sbnAD ASKDB KAsbd kabsd kabsd
          kabndk baksd askdaoj sdasjdbnka sbnAD ASKDB KAsbd kabsd kabsd kabndk
          baksd askdaoj sdasjdbnka sbn
        </p>
        <button className="login-btn get-started-btn">Get Started</button>
      </div>
      <div className="img-section">
        <img src={webIcon} alt="webpng" />
      </div>
    </div>
  );
};

export default HomeSection;

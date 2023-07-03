import React from "react";
import "../../style/home/service.css";
import { BsHddNetwork } from "react-icons/bs";
const Service = () => {
  return (
    <div class="service" id="service">
      <h1>OUR FEATURES</h1>
      <div className="service-cards">
        <div className="card">
          <BsHddNetwork className="service-icon" />
          <h3>Manage</h3>
          <p>
            Add, update, and delete projects effortlessly, 
            empowering you with complete control over your development 
            endeavors.
          </p>
        </div>
        <div className="card">
          <BsHddNetwork className="service-icon" />
          <h3>Track Pipeline Progress</h3>
          <p>
            Stay informed about the progress of your pipeline at every step. 
            Track the execution of each stage with ease and efficiency.
          </p>
        </div>
        <div className="card">
          <BsHddNetwork className="service-icon" />
          <h3>Language Flexibility</h3>
          <p>
            Choose from a wide range of languages, including Python, Java, PHP, 
            JavaScript, and C#. Tailor your projects to your preferred programming language.
          </p>
        </div>
        <div className="card">
          <BsHddNetwork className="service-icon" />
          <h3>DSL Support</h3>
          <p>
          Our innovative DSL provides a user-friendly interface to expedite project setup. 
          Simply configure your projects with ease and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;

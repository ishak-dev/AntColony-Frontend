import React from "react";
import "../../style/home/service.css";
import { BsHddNetwork } from "react-icons/bs";
const Service = () => {
  return (
    <div class="service">
      <h1>OUR SERVICE</h1>
      <div className="service-cards">
        <div className="card">
          <BsHddNetwork className="service-icon" />
          <h3>Manage</h3>
          <p>
            manage your Pipelines, and work with them without problems, we
            provide good environment, and dashboard
          </p>
        </div>
        <div className="card">
          <BsHddNetwork className="service-icon" />
          <h3>Manage</h3>
          <p>
            manage your Pipelines, and work with them without problems, we
            provide good environment, and dashboard
          </p>
        </div>
        <div className="card">
          <BsHddNetwork className="service-icon" />
          <h3>Manage</h3>
          <p>
            manage your Pipelines, and work with them without problems, we
            provide good environment, and dashboard
          </p>
        </div>
        <div className="card">
          <BsHddNetwork className="service-icon" />
          <h3>Manage</h3>
          <p>
            manage your Pipelines, and work with them without problems, we
            provide good environment, and dashboard
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;

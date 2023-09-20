import React from "react";
import { Link } from "react-router-dom";
import Crappo from "./Crappo";
import Passvault from "./Passvault";
import "./project.css";
import RealtyView from "./RealtyView";
import Suvanni from "./Suvanni";
import Transferhub from "./Transferhub";
import Vade from "./Vade";

const Project = () => {
  return (
    <section id="projects" className="container project project__container">
      <div className="flex flex-between">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Here are a few of our favorite projects.
        </h2>
        <div className="line-div"></div>
      </div>

      <div className="card-main margin-bottom-lg ">
        <RealtyView />
        <Transferhub />
        <Suvanni />
        <Crappo />
        <Passvault />
        <Vade />
      </div>

      <div className="buttonDiv" data-aos="fade-up" data-aos-duration="1000">
        <Link to="/allprojects">
          <button className="btn btn-primary" type="button">
            View All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Project;

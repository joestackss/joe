import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import "../../components/Projects/project.css";
import Converter from "../Projects/Converter";
import Crappo from "../Projects/Crappo";
import Passvault from "../Projects/Passvault";
import RealtyView from "../Projects/RealtyView";
import RolePlays from "../Projects/RolePlay";
import Suvanni from "../Projects/Suvanni";
import Transferhub from "../Projects/Transferhub";
import Vade from "../Projects/Vade";
import "./allprojects.css";

const Allprojects = () => {
  return (
    <section
      id="projects"
      className="container project allprojects project__container"
    >
      <h2>Projects</h2>
      <p className="text-center">
        We've built cool apps and websites using anything from HTML to React.
        Here are some of my favorite projects over the course of my journey.
      </p>
      <div className="card-main margin-bottom-lg ">
        <RealtyView />
        <Transferhub />
        <Suvanni />
        <Crappo />
        <Passvault />
        <Vade />
        <RolePlays />
        <Converter />
      </div>
    </section>
  );
};

export default Allprojects;

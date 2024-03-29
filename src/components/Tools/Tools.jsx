import React from "react";
import "./tools.css";

const Tools = () => {
  return (
    <section id="tools" className="container tools__container tools">
      <h2 className="text-white" data-aos="fade-up" data-aos-duration="1000">
        We’ve got the experience. Here is our toolbelt for success.
      </h2>
      <div className="flex flex-between col-1">
        <div className="inner-col-1" data-aos="zoom-in" data-aos-duration="1000">
          <img src="html5-original.svg" />
          <h3>Html</h3>
        </div>
        <div className="inner-col-1" data-aos="zoom-in" data-aos-duration="1000">
          <img src="css3-original.svg" />
          <h3>Css</h3>
        </div>
        <div className="inner-col-1" data-aos="zoom-in" data-aos-duration="1000">
          <img src="javascript-original.svg" />
          <h3>Javascript</h3>
        </div>
        <div className="inner-col-1" data-aos="zoom-in" data-aos-duration="1000">
          <img src="react-js-icon.svg" />
          <h3>React</h3>
        </div>
        <div className="inner-col-1" data-aos="zoom-in" data-aos-duration="1000">
          <img src="sass-original.svg" />
          <h3>Sass</h3>
        </div>
        <div className="inner-col-1" data-aos="zoom-in" data-aos-duration="1000">
          <img src="tailwindcss-plain.svg" />
          <h3>Tailwind</h3>
        </div>
        <div className="inner-col-1" data-aos="zoom-in" data-aos-duration="1000">
          <img src="typescript-original.svg" />
          <h3>Typescript</h3>
        </div>
        <div className="inner-col-1" data-aos="zoom-in" data-aos-duration="1000">
          <img src="nodejs-original.svg" />
          <h3>Nodejs</h3>
        </div>

        <div className="inner-col-1" data-aos="zoom-in" data-aos-duration="1000">
          <img src="git-original.svg" />
          <h3>Git</h3>
        </div>

        <div className="inner-col-1" data-aos="zoom-in" data-aos-duration="1000">
          <img src="firebase-plain.svg" />
          <h3>Firebase</h3>
        </div>

        <div className="inner-col-1" data-aos="zoom-in" data-aos-duration="1000">
          <img src="figma-original.svg" />
          <h3>Figma</h3>
        </div>

        <div className="inner-col-1" data-aos="zoom-in" data-aos-duration="1000">
          <img src="adobe-photoshop-icon.svg" />
          <h3>Photoshop</h3>
        </div>
      </div>
    </section>
  );
};

export default Tools;

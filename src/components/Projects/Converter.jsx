import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function Converter() {
  return (
    <div className="card-col" data-aos="fade-up" data-aos-duration="1000">
      <a href="https://globalconvertunits.netlify.app/" target="_blank">
        <img src="unitcal.png" alt="" className="img-div" />
      </a>
      <div className="flex flex-between">
        <h3>Global Converter </h3>
        <div>
          <a href="https://globalconvertunits.netlify.app/" target="_blank">
            <BiLinkExternal className="icons" />
          </a>
          {/* <a
            href="https://github.com/joestackss/Unit-Converter"
            target="_blank"
          >
            <BsGithub className="icons" />
          </a> */}
        </div>
      </div>
      <p className="paragraph">
        A JS web app which converts units like meters, kilogram, etc.
      </p>
      <div className="flex flex-wrap">
        <p className="btn-tag">Javascript</p>
        <p className="btn-tag">CSS</p>
      </div>
    </div>
  );
}

export default Converter;

import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function Vade() {
  return (
    <div className="card-col" data-aos="fade-up" data-aos-duration="1000">
      <a href="https://vadeapp.netlify.app/" target="_blank">
        <img src="vade.png" alt="" className="img-div" />
      </a>
      <div className="flex flex-between ">
        <h3>Vade</h3>
        <div>
          <a href="https://vadeapp.netlify.app/" target="_blank">
            <BiLinkExternal className="icons" />
          </a>
          {/* <a href="https://github.com/joestackss/VADE" target="_blank">
            {" "}
            <BsGithub className="icons" />
          </a> */}
        </div>
      </div>
      <p className="paragraph">
        An SPA which measure occupancy, analyze demand {"&"} manage curb space.
      </p>
      <div className="flex flex-wrap">
        <p className="btn-tag ">React</p>
        <p className="btn-tag">Javascript</p>
        <p className="btn-tag">CSS</p>
      </div>
    </div>
  );
}

export default Vade;

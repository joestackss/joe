import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function Transferhub() {
  return (
    <div className="card-col" data-aos="fade-up" data-aos-duration="1000">
      <a href="https://transferng.vercel.app/" target="_blank">
        <img src="thub.png" alt="" className="img-div" />
      </a>
      <div className="flex flex-between">
        <h3>TransferhubNG</h3>
        <div>
          <a href="https://transferng.vercel.app/" target="_blank">
            <BiLinkExternal className="icons" />
          </a>
          {/* <a href="https://github.com/joestackss/THubNG" target="_blank">
            <BsGithub className="icons" />
          </a> */}
        </div>
      </div>
      <p className="paragraph">
        A web app where grass roots players get connected to agents and clubs.
      </p>
      <div className="flex flex-wrap">
        <p className="btn-tag">React</p>
        <p className="btn-tag">Javascript</p>
        <p className="btn-tag">CSS</p>
      </div>
    </div>
  );
}

export default Transferhub;

import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function RolePlays() {
  return (
    <div className="card-col" data-aos="fade-up" data-aos-duration="1000">
      <a href="https://roleplayingame.netlify.app/" target="_blank">
        <img src="role-play.png" alt="" className="img-div" />
      </a>
      <div className="flex flex-between">
        <h3>Role Play Game</h3>
        <div>
          <a href="https://roleplayingame.netlify.app/" target="_blank">
            <BiLinkExternal className="icons" />
          </a>
          {/* <a
            href="https://github.com/joestackss/Role-Play-Game"
            target="_blank"
          >
            <BsGithub className="icons" />
          </a> */}
        </div>
      </div>
      <p className="paragraph">
        A Javascript game based on the theme of Hero and Monster rolling dice.
      </p>
      <div className="flex flex-wrap">
        <p className="btn-tag">Javascript</p>
        <p className="btn-tag">CSS</p>
        <p className="btn-tag">Html</p>
      </div>
    </div>
  );
}

export default RolePlays;

import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function Passvault() {
  return (
    <div className="card-col" data-aos="fade-up" data-aos-duration="1000">
      <a href="https://passworth.netlify.app/" target="_blank">
        <img src="generator.png" alt="" className="img-div" />
      </a>
      <div>
        <div className="flex flex-between">
          <h3>Passvault </h3>
          <div>
            <a href="https://passworth.netlify.app/" target="_blank">
              <BiLinkExternal className="icons" />
            </a>
            {/* <a
              href="https://github.com/joestackss/Password-Generator"
              target="_blank"
            >
              <BsGithub className="icons" />
            </a> */}
          </div>
        </div>
        <div>
          <p className="paragraph">
            A web app which generate password off letters, symbols and numbers.
          </p>
          <div className="flex flex-wrap">
            <p className="btn-tag">Javascript</p>
            <p className="btn-tag">CSS</p>
            <p className="btn-tag">Html</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Passvault;

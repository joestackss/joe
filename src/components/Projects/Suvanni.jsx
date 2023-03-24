import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function Suvanni() {
  return (
    <div className="card-col" data-aos="fade-up" data-aos-duration="1000">
      <a href="https://suvanniv2.netlify.app/" target="_blank">
        <img src="suvanni.png" alt="" className="img-div" />
      </a>
      <div className="flex flex-between">
        <h3>Suvaani</h3>
        <div>
          <a href="https://suvanniv2.netlify.app/" target="_blank">
            <BiLinkExternal className="icons" />
          </a>
          {/* <a href="https://github.com/joestackss/THubNG" target="_blank">
            <BsGithub className="icons" />
          </a> */}
        </div>
      </div>

      <div>
        <p className="paragraph">
          Suvanni is a web app designed for stock market enthusiasts. It provides users with the ability to calculate their shares' value and dividend yield.
        </p>
        <div className="flex flex-wrap">
          <p className="btn-tag">React</p>
          <p className="btn-tag">Firebase</p>
          <p className="btn-tag">TailwindCSS</p>
        </div>
      </div>
    </div>
  );
}

export default Suvanni;

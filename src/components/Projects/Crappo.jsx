import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function Crappo() {
  return (
    <div className="card-col" data-aos="fade-up" data-aos-duration="1000">
      <a href="https://crappo-app.netlify.app/" target="_blank">
        <img src="crappo.png" alt="" className="img-div" />
      </a>
      <div className="flex flex-between">
        <h3>Crappo App</h3>
        <div>
          <a href="https://crappo-app.netlify.app/" target="_blank">
            <BiLinkExternal className="icons" />
          </a>
          {/* <a href="https://github.com/joestackss/crappo-react" target="_blank">
            <BsGithub className="icons" />
          </a> */}
        </div>
      </div>
      <p className="paragraph"> CRAPPO is a web-based app that provides users with the opportunity to invest in cryptocurrencies, allowing them to leverage the potential growth of digital assets.</p>
      <div className="flex flex-wrap">
        <p className="btn-tag ">React</p>
        <p className="btn-tag">Javascript</p>
        <p className="btn-tag">CSS</p>
      </div>
    </div>
  );
}

export default Crappo;

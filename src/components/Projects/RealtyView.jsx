import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function RealtyView() {
  return (
    <div className="card-col" data-aos="fade-up" data-aos-duration="1000">
      <a href="https://www.realtyview.com" target="_blank">
        <img src="Realty-View.png" alt="" className="img-div" />
      </a>
      <div>
        <div className="flex flex-between">
          <h3>Realty View </h3>
          <div>
            <a href="https://www.realtyview.com" target="_blank">
              <BiLinkExternal className="icons" />
            </a>
            {/* <a href="https://github.com/joestackss" target="_blank">
              <BsGithub className="icons" />
            </a> */}
          </div>
        </div>
        <div>
          <p className="paragraph">
          RealtyView is a real estate listing search portal for home buyers and real estate agents.
          </p>
          <div className="flex flex-wrap">
            <p className="btn-tag">Next.js</p>
            <p className="btn-tag">Stripe</p>
            <p className="btn-tag">Firebase</p>
            <p className="btn-tag">TaiwindCSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealtyView;

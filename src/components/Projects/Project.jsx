import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import "./project.css";

const Project = () => {
  return (
    <section className="container project project__container">
      <div className="flex flex-between">
        <h2>Here are a few of my favorite projects.</h2>
        <div className="line-div"></div>
      </div>

      <div className=" card-main flex flex-between ">
        <div className="card-col">
          <img src="yei-learn.png" alt="" className="img-div" />
          <div className="flex flex-between">
            <h3>Learn.TheYEI</h3>
            <div>
              <BiLinkExternal className="icons" />
              <BsGithub className="icons" />
            </div>
          </div>
          <p>All the resources you will need to get a boost into economics.</p>
          <div className="flex flex-wrap">
            <p className="btn-tag ">React</p>
            <p className="btn-tag">Javascript</p>
            <p className="btn-tag">CSS</p>
          </div>
        </div>
        <div className="card-col">
          <img src="buildfaster.png" alt="" className="img-div" />
          <div className="flex flex-between">
            <h3>BuildFaster</h3>
            <div>
              <BiLinkExternal className="icons" />
              <BsGithub className="icons" />
            </div>
          </div>
          <p>Beautiful HTML templates ready-made for your next landing page.</p>
          <div className="flex flex-wrap">
            <p className="btn-tag">React</p>
            <p className="btn-tag">Javascript</p>
            <p className="btn-tag">CSS</p>
          </div>
        </div>
        <div className="card-col">
          <img src="react-emoji-search.png" alt="" className="img-div" />
          <div className="flex flex-between">
            <h3>React Emoji Search</h3>
            <div>
              <BiLinkExternal className="icons" />
              <BsGithub className="icons" />
            </div>
          </div>
          <p>
            1800+ emojis at your fingertips. Ready-to-use with just a simple
            copy+paste.
          </p>
          <div className="flex flex-wrap">
            <p className="btn-tag">React</p>
            <p className="btn-tag">Javascript</p>
            <p className="btn-tag">CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

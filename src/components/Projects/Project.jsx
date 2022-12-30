import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import Allprojects from "../Allprojects/Allprojects";
import "./project.css";

const Project = () => {
  return (
    <section id="projects" className="container project project__container">
      <div className="flex flex-between">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Here are a few of my favorite projects.
        </h2>
        <div className="line-div"></div>
      </div>

      <div className="card-main margin-bottom-lg ">
        <div className="card-col" data-aos="fade-up" data-aos-duration="1000">
          <a href="https://www.realtyview.com/" target="_blank">
            <img src="Realty-View.png" alt="" className="img-div" />
          </a>
          <div>
            <div className="flex flex-between">
              <h3>Realty View </h3>
              <div>
                <a href="https://www.realtyview.com/" target="_blank">
                  <BiLinkExternal className="icons" />
                </a>
                <a href="https://github.com/joestackss" target="_blank">
                  <BsGithub className="icons" />
                </a>
              </div>
            </div>
            <div>
              <p className="paragraph">
                A SaaS app where Millions Of Property Records can be searched.
              </p>
              <div className="flex flex-wrap">
                <p className="btn-tag">Next.js</p>
                <p className="btn-tag">Stripe</p>
                <p className="btn-tag">Firebase</p>
                <p className="btn-tag">Taiwind</p>
              </div>
            </div>
          </div>
        </div>
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
              <a href="https://github.com/joestackss/THubNG" target="_blank">
                <BsGithub className="icons" />
              </a>
            </div>
          </div>
          <p className="paragraph">
            A web app where grass roots players get connected to agents and
            clubs.
          </p>
          <div className="flex flex-wrap">
            <p className="btn-tag">React</p>
            <p className="btn-tag">Javascript</p>
            <p className="btn-tag">CSS</p>
          </div>
        </div>
        <div className="card-col" data-aos="fade-up" data-aos-duration="1000">
          <a href="https://passworth.netlify.app/" target="_blank">
            <img src="generator.png" alt="" className="img-div" />
          </a>
          <div>
            <div className="flex flex-between">
              <h3>Passworth </h3>
              <div>
                <a href="https://passworth.netlify.app/" target="_blank">
                  <BiLinkExternal className="icons" />
                </a>
                <a
                  href="https://github.com/joestackss/Password-Generator"
                  target="_blank"
                >
                  <BsGithub className="icons" />
                </a>
              </div>
            </div>
            <div>
              <p className="paragraph">
                A web app which generate password off letters, symbols and
                numbers.
              </p>
              <div className="flex flex-wrap">
                <p className="btn-tag">Javascript</p>
                <p className="btn-tag">CSS</p>
                <p className="btn-tag">Html</p>
              </div>
            </div>
          </div>
        </div>
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
              <a href="https://github.com/joestackss/VADE" target="_blank">
                {" "}
                <BsGithub className="icons" />
              </a>
            </div>
          </div>
          <p className="paragraph">
            An SPA which measure occupancy, analyze demand {"&"} manage curb
            space.
          </p>
          <div className="flex flex-wrap">
            <p className="btn-tag ">React</p>
            <p className="btn-tag">Javascript</p>
            <p className="btn-tag">CSS</p>
          </div>
        </div>
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
              <a
                href="https://github.com/joestackss/Role-Play-Game"
                target="_blank"
              >
                <BsGithub className="icons" />
              </a>
            </div>
          </div>
          <p className="paragraph">
            A Javascript game based on the theme of Hero and Monster rolling
            dice.
          </p>
          <div className="flex flex-wrap">
            <p className="btn-tag">Javascript</p>
            <p className="btn-tag">CSS</p>
            <p className="btn-tag">Html</p>
          </div>
        </div>

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
              <a
                href="https://github.com/joestackss/crappo-react"
                target="_blank"
              >
                <BsGithub className="icons" />
              </a>
            </div>
          </div>
          <p className="paragraph">
            A web app where people can invest in cryptocurrency.
          </p>
          <div className="flex flex-wrap">
            <p className="btn-tag ">React</p>
            <p className="btn-tag">Javascript</p>
            <p className="btn-tag">CSS</p>
          </div>
        </div>
      </div>

      <div className="buttonDiv" data-aos="fade-up" data-aos-duration="1000">
        <Link to="/allprojects">
          <button className="btn btn-primary" type="button">
            View All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Project;

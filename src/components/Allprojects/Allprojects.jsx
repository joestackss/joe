import React from 'react'
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import '../../components/Projects/project.css'

const Allprojects = () => {
  return (
    <section id="projects" className="container project project__container">
    <div className="flex flex-between">
      <h2>Here are a few of my favorite projects.</h2>
      <div className="line-div"></div>
    </div>

    <div className=" card-main flex flex-between margin-bottom-lg ">
      <div className="card-col">
        <a href="https://crappo-app.netlify.app/" target="_blank">
          <img src="yei-learn.png" alt="" className="img-div" />
        </a>
        <div className="flex flex-between">
          <h3>Crappo App</h3>
          <div>
            <BiLinkExternal className="icons" />
            <BsGithub className="icons" />
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
      <div className="card-col">
        <img src="buildfaster.png" alt="" className="img-div" />
        <div className="flex flex-between">
          <h3>TransferhubNG</h3>
          <div>
            <BiLinkExternal className="icons" />
            <BsGithub className="icons" />
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
      <div className="card-col">
        <img src="react-emoji-search.png" alt="" className="img-div" />
        <div className="flex flex-between">
          <h3>Passworth </h3>
          <div>
            <BiLinkExternal className="icons" />
            <BsGithub className="icons" />
          </div>
        </div>
        <p className="paragraph">
        A web app which let users generate password off letters, symbols and numbers.
        </p>
        <div className="flex flex-wrap">
          <p className="btn-tag">Javascript</p>
          <p className="btn-tag">CSS</p>
          <p className="btn-tag">Html</p>
        </div>
      </div>
    </div>

    <div className=" card-main flex flex-between ">
      <div className="card-col ">
        <img src="yei-learn.png" alt="" className="img-div" />
        <div className="flex flex-between ">
          <h3>Vade</h3>
          <div>
            <BiLinkExternal className="icons" />
            <BsGithub className="icons" />
          </div>
        </div>
        <p className="paragraph">
        An SPA which lets users measure occupancy, analyze demand & manage curb space.
        </p>
        <div className="flex flex-wrap">
          <p className="btn-tag ">React</p>
          <p className="btn-tag">Javascript</p>
          <p className="btn-tag">CSS</p>
        </div>
      </div>
      <div className="card-col">
        <img src="buildfaster.png" alt="" className="img-div" />
        <div className="flex flex-between">
          <h3>Role Play</h3>
          <div>
            <BiLinkExternal className="icons" />
            <BsGithub className="icons" />
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
      <div className="card-col">
        <img src="react-emoji-search.png" alt="" className="img-div" />
        <div className="flex flex-between">
          <h3>Global Converter </h3>
          <div>
            <BiLinkExternal className="icons" />
            <BsGithub className="icons" />
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
    </div>
    <div className="buttonDiv">
      <button className="btn btn-primary">View All</button>
    </div>
  </section>
  )
}

export default Allprojects
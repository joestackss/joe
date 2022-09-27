import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Navs = () => {
  const [navToggle, setNavToggle] = useState(false);
  const navHandler = () => {
    setNavToggle((prevData) => !prevData);
  };

  return (
    <nav className="navbar w-100 flex">
      <section className="containers w-100">
        <div className="navbar-content flex fw-3">
          <div className="brand-and-toggler flex flex-between nav-width">
            <Link to="/">
              <a href="#" className="navbar-brand">
                {/* <img src="logo.svg" alt="logo" /> */}
                <h2>Joestackss</h2>
              </a>
            </Link>
            <div
              type="button"
              className={`hamburger-menu ${
                navToggle ? "hamburger-menu-change" : ""
              }`}
              onClick={navHandler}
            >
              <div className="bar-top"></div>
              <div className="bar-middle"></div>
              <div className="bar-bottom"></div>
            </div>
          </div>

          <div
            className={`navbar-collapse ${
              navToggle ? "show-navbar-collapse" : ""
            }`}
          >
            <div className="navbar-collapse-content">
              <ul className="navbar-nav nav-width-1">
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#tools">Tools</a>
                </li>
                <li>
                  <a href="#testimonial">Testimonial</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <div className="flex navbar-btns ">
                <a href="mailto: archjo6@gmail.com">
                  <button type="button" className="btn btn-primary">
                    <span>Get In Touch</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navs;

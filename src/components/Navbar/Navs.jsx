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
            <Link to="/" className="navbar-brand">
              {/* <img src="logo.svg" alt="logo" /> */}
              <h2>Joestackks</h2>
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
                <li className="text-black">
                  <Link to="#product">Porfolio</Link>
                </li>
                <li className="text-black">
                  <Link to="#feature">Testimonial</Link>
                </li>
                <li className="text-black">
                  <Link to="#about">Contact</Link>
                </li>
                <li className="text-black">
                  <Link to="/">Login</Link>
                </li>
              </ul>
              <div className="flex navbar-btns ">
                <button type="button" className="btn btn-primary">
                  <span>Get In Touch</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navs;

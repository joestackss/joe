import React from "react";
import "./footer.css";
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <section className="container flex flex-wrap flex-between">
        <div className="footer-col">
          <div className="col-1 crappo-logo">
            {/* <img src="logo.svg" alt="logo" loading="lazy" /> */}
            <h2>JoeStackss</h2>
          </div>
          <div className="col-2">
            <h3>Quick Link</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h3>Social</h3>
            <ul>
              <li>
                <a href="https://github.com/joestackss" target="_blank">
                  Github
                </a>
              </li>
              <li>
                <a href="https://twitter.com/joestackss" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/joestackss/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h3 className="text-white">Support my work</h3>
            <button className="btn btn-primary margin-bottom-md">
              Buy me coffee
            </button>
            <p>I appreciate your support! 💙</p>
          </div>
        </div>

        <div className="footer-end flex flex-between flex-end">
          <div className="col-1">
            <p>
              © <span id="dateHtml">{new Date().getFullYear()}</span>{" "}
              Joestackss. All rights reserved -{" "}
              <span className="text-blue">Made by Joestackss</span>
            </p>
          </div>

          <div className="col-2 flex">
            <a href="https://github.com/joestackss" target="_blank">
              <BsGithub className="icons" />
            </a>
            <a href="https://twitter.com/joestackss " target="_blank">
              <BsTwitter className="icons" />
            </a>
            <a href="https://www.instagram.com/stacksjoeh/" target="_blank">
              <BsInstagram className="icons" />
            </a>
            <a href="https://www.linkedin.com/in/joestackss/" target="_blank">
              <BsLinkedin className="icons" />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

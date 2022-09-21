import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
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
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h3>Social</h3>
              <ul>
                <li>
                  <a href="#">Github </a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Linkedin</a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h2 className="text-white">Support my work</h2>
              <button className="btn btn-primary margin-bottom-md">Buy me coffee</button>
              <p>I appreciate your support very much! 💙</p>
            </div>
          </div>

        <div className="footer-end flex flex-between flex-end">
          <div className="col-1">
            <p>
              © <span id="dateHtml">{new Date().getFullYear()}</span> Joestackss. 
              All rights reserved
            </p>
          </div>

          <div className="col-2 flex">
            <a href="#">
              <img src="instagram.svg" alt="instagram" loading="lazy" />
            </a>
            <a href="#">
              <img src="youtube.svg" alt="youtube" loading="lazy" />
            </a>
            <a href="#">
              <img src="twitter.svg" alt="twitter" loading="lazy" />
            </a>
            <a href="#">
              <img src="linkedin.svg" alt="linkedin" loading="lazy" />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

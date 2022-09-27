import React from "react";
import "./header.css";


const Header = () => {
  return (
    <section id="header" className="container header header__container">
      <div className="heading" data-aos="fade-up" data-aos-duration="2000">
        <h2>Hello, I'm Joseph</h2>
        <h1>
          I enjoy <span className="span">building</span> and{" "}
          <span className="span">designing</span> for the web.
        </h1>
        <a href="#projects">
          <button className="btn btn-primary ">Tell me more</button>
        </a>
      </div>
    </section>
  );
};

export default Header;

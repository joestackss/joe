import React from "react";
import "./header.css";

const Header = () => {
  return (
    <section id="header" className="container header header__container">
      <h2 className="text-light">Hello, I'm Joseph</h2>
      <h1>
        I enjoy <span className="span">building</span> and{" "}
        <span className="span">designing</span> for the web.
      </h1>
      <button className="btn btn-primary ">Tell me more</button>
    </section>
  );
};

export default Header;

import React from "react";
import "./header.css";

const Header = () => {
  return (
    <section className="container header header__container">
      <h1>
        I enjoy <span>building</span> and <span>designing</span> for the web.
      </h1>
      <button className="btn btn-primary ">Tell Me More</button>
    </section>
  );
};

export default Header;

import React from "react";
import "./navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        {" "}
        <BiBook />{" "}
      </a>
      <a href="#tools">
        <AiOutlineUser />
      </a>
      <a href="#testimonial">
        <BiMessageSquareDetail />
      </a>
      <a href="#footer">
        {" "}
        <RiServiceLine />{" "}
      </a>
    </nav>
  );
};

export default Nav;

import React from "react";
import "../css/NavBar.css";

const NavBar = ({ hamburger }) => {
  return (
    <section className="NavBar">
      <div className="name">
        <a href="/">
          <h1>BY</h1>
        </a>
      </div>

      <div className="nav_links">
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
        <button id="resume">Resume</button>
      </div>

      <div className="hamburger__menu" onClick={hamburger}>
        <div id="ham1"></div>
        <div id="ham2"></div>
        <div id="ham3"></div>
      </div>
    </section>
  );
};

export default NavBar;

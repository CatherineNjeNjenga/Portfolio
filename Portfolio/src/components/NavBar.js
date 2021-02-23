import React from "react";
import { useSpring, animated, config } from "react-spring";
import "../css/NavBar.css";

const NavBar = ({ hamburger }) => {
  const springNavBar = useSpring({
    opacity: 1,
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -10 },
    delay: 700,
    config: { mass: 1, tension: 400, friction: 25 },
  });

  return (
    <section className="NavBar">
      <animated.div style={springNavBar} className="name">
        <a href="/">
          <h1>BY</h1>
        </a>
      </animated.div>

      <animated.div style={springNavBar} className="nav_links">
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
      </animated.div>

      <div className="hamburger__menu" onClick={hamburger}>
        <div id="ham1"></div>
        <div id="ham2"></div>
        <div id="ham3"></div>
      </div>
    </section>
  );
};

export default NavBar;

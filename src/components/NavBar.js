import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-scroll";
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
            <Link to="Projects" smooth={true} duration={1000} offset={-200}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="AboutMe" smooth={true} duration={1000} offset={-300}>
              About
            </Link>
          </li>
          <li>
            <Link to="Contact" smooth={true} duration={1050}>
              Contact me
            </Link>
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

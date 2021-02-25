import React from "react";
import "../css/SideDrawer.css";
import { Link } from "react-scroll";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
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
        <li>
          <a href="#" id="backdrop_resume">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;

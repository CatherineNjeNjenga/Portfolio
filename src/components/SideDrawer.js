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
          <Link
            to="Projects"
            smooth={true}
            duration={1000}
            offset={-200}
            onClick={click}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="AboutMe"
            smooth={true}
            duration={1000}
            offset={-300}
            onClick={click}
          >
            About
          </Link>
        </li>

        <li>
          <Link to="Contact" smooth={true} duration={1050} onClick={click}>
            Contact me
          </Link>
        </li>
        <li>
          <a
            id="backdrop_resume"
            onClick={click}
            href="https://docs.google.com/document/d/1fu_jzBa3l6l2ldxZFBvuvKCqLb6O8wGtmDUzl1or7XQ/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;

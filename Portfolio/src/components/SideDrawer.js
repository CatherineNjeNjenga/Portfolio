import React from "react";
import "../css/SideDrawer.css";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#about">Your Account</a>
        </li>

        <li>
          <a href="#Contact">Contact Me</a>
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

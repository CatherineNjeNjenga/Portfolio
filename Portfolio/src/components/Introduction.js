import React from "react";
import "../css/Introduction.css";

const Introduction = () => {
  return (
    <section id="Introduction">
      <div className="intro">
        <h1>Hi, my name is</h1>
        <h2>Bryan Yi.</h2>
        <h3>I'm a Front-End Web Developer.</h3>
      </div>
      <div className="intro_description">
        <p>
          I'm a web developer based in Los Angeles, CA with a passion for
          building extraordinary websites and applications.
        </p>
      </div>

      <div className="personal_links">
        <a href="https://www.linkedin.com/in/bryantaeyi/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/bryanyi">
          <i className="fab fa-github"></i>
        </a>
        <a href="#">
          <i className="far fa-file"></i>
        </a>
      </div>
      <div className="intro_action">
        <a href="#projects" id="projects">
          Projects
        </a>
        <a href="mailto:bryanyi1206@gmail.com" id="contactme">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Introduction;

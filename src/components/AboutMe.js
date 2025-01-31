import React from "react";
import "../css/AboutMe.css";

const AboutMe = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="2000" id="AboutMe">
      <div className="aboutme_heading">
        <h2>About me</h2>

        <div className="aboutme__links">
          <a
            href="https://www.linkedin.com/in/bryantaeyi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/bryanyi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>

          <button>
            <a
              href="./BryanYi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </button>
        </div>
      </div>

      <div className="aboutme_content">
        <div className="description">
          <p>
            Hi there! I'm <span id="me">Catherine Njenga</span>, a Web Developer
            with a passion for developing web applications that make a positive
            impact on peoples lives.
          </p>
          <p>
            My goal is to create products with great user experience, 
            and to architect clean and readable code.
          </p>
          <p>Here are a few technologies I have been working with lately:</p>

          <ul className="skills">
            <li>ReactJS</li>
            <li>Node.js/Express</li>
            <li>Javascript(ES6+)</li>
            <li>Bootstrap</li>
            <li>MongoDB</li>
            <li>Postgresql</li>
          </ul>
        </div>
        <div className="image">
          <img src="/images/AboutMe.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

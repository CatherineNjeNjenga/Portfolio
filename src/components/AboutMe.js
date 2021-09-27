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
            Hi there! I'm <span id="me">Bryan</span>, a Web Developer based in
            Southern California, and I love creating web applications that
            people can enjoy and use.
          </p>

          <p>
            My goal is to create products that clients are proud of, and to
            architect clean and readable code.
          </p>
          <p>Here are a few technologies I have been working with lately:</p>

          <ul className="skills">
            <li>Next.js/Redux</li>
            <li>Typescript</li>
            <li>Javascript(ES6+)</li>
            <li>SASS/SCSS</li>
            <li>GraphQL</li>
            <li>Node.js/Express</li>
            <li>Postgresql</li>
            <li>Shopify</li>
          </ul>
        </div>
        <div className="image">
          <img src="/images/bryan_profile.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

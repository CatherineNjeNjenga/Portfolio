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
              href="https://docs.google.com/document/d/1fu_jzBa3l6l2ldxZFBvuvKCqLb6O8wGtmDUzl1or7XQ/edit"
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
            <li>React.js/Redux</li>
            <li>Javascript(ES6+)/Typescript</li>
            <li>Gatsby.js</li>
            <li>GraphQL</li>
            <li>Node.js/Express</li>
            <li>Python/Django</li>
            <li>mySQL</li>
            <li>HTML/CSS</li>
            <li>MongoDB/Mongoose</li>
            <li>Shopify/Liquid</li>
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

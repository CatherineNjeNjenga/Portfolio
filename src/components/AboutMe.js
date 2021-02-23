import React from "react";
import "../css/AboutMe.css";

const AboutMe = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="2000" id="AboutMe">
      <div className="aboutme_heading">
        <h2>About me</h2>
      </div>

      <div className="aboutme_content">
        <div className="description">
          <p>
            Hi there! I'm <span id="me">Bryan</span>, a Web Developer based in
            Los Angeles, CA, and I love creating web applications that people
            can enjoy and use.
          </p>

          <p>
            I always aim to create products that clients are proud of, and to
            architect clean and readable code.
          </p>
          <p>Here are a few technologies I have been working with lately:</p>

          <ul className="skills">
            <li>React.js/Redux</li>
            <li>Javascript (ES6+)</li>
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

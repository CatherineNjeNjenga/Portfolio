import React from "react";

const RateCard= () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="projects_display"
    >
      <div className="right-project_content">
        <h3 className="project_title">RateCard</h3>
        <div className="right-project_description">
          <p>
            The key points of this project is to demonstrate a working knowledge of
            of connecting a React.js frontend to
            PostgreSQL database and enhancing user interaction with D3.js.
          </p>
          <ul className="right-project_tech">
            <li>React</li>
            <li>Node</li>
            <li>PostgreSQL</li>
            <li>D3.js</li>
          </ul>
          <div className="right-project_links">
            <a
              href="https://github.com/bryanyi/reddityi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://bryanyiapps.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="right-project_image">
        <a
          href="https://bryanyiapps.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/reddityi.png"
            alt="COVID Vaccination Project"
          />
        </a>
      </div>
    </div>
  );
};

export default RateCard;

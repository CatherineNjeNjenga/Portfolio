import React from "react";

const BragBook= () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="projects_display"
    >
      <div className="project_content">
        <h3 className="project_title">BragBook</h3>
        <div className="project_description">
          <p>
            The key points of this project is to demonstrate a working knowledge
            of both backend and frontend technologies by hosting data on
            MongoDB, creating business logic (authentication) & API endpoints
            with Node.js, then fetching that API using React.js for the
            frontend.
          </p>

          <ul className="project_tech">
            <li>React.js/Redux</li>
            <li>Node.js/Express</li>
            <li>MongoDB/Mongoose</li>
            <li>Stripe</li>
            <li>NodeMailer</li>
          </ul>
          <div className="project_links">
            <a
              href="https://github.com/bryanyi/E-Kars"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://e-kars.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="project_image">
        <a
          href="https://e-kars.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/ekars.png" alt="E-Kars Project" />
        </a>
      </div>
    </div>
  );
};

export default BragBook;

import React from "react";
import "../css/Projects.css";

const Projects = () => {
  return (
    <section id="Projects">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="projects_heading"
      >
        <h2>My Projects</h2>
        <div id="heroku">
          Heroku taking too long? View detailed gifs in my github links!
        </div>
      </div>

      {/* Project 1 */}
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="projects_display"
      >
        <div className="project_content">
          <h3 className="project_title">E-Kars</h3>
          <div className="project_description">
            <p>
              The key points of this project is to demonstrate a working
              knowledge of both backend and frontend technologies by hosting
              data on MongoDB, creating business logic (authentication) & API
              endpoints with Node.js, then fetching that API using React.js for
              the frontend.
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

      {/* Project 2 */}
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="projects_display"
      >
        <div className="right-project_content">
          <h3 className="project_title">World COVID19 Vaccinations</h3>
          <div className="right-project_description">
            <p>
              The key point of this project is to demonstrate a working
              knowledge of hosting data on AWS, querying that dataset with SQL
              to create API endpoints using Django, and then visualizing that
              dataset with React.js and Chart.js.
            </p>
            <ul className="right-project_tech">
              <li>React.js</li>
              <li>Python/Django</li>
              <li>SQL</li>
              <li>Chart.js</li>
            </ul>
            <div className="right-project_links">
              <a
                href="https://github.com/bryanyi/COVID-Vaccination-Tracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://world-covid-vaccinations.netlify.app/"
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
            href="https://world-covid-vaccinations.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/covidvaccinations.png"
              alt="COVID Vaccination Project"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import "../css/Projects.css";

const Projects = () => {
  return (
    <section id="Projects">
      <div className="projects_heading">
        <h2>My Projects</h2>
      </div>

      {/* Project 1 */}
      <div className="projects_display">
        <div className="project_content">
          <h3 className="project_title">E-Kars</h3>
          <div className="project_description">
            <p>
              E-Kars is a (hypothetical) full-stack e-Commerce project that
              sells used electric cars. Features include full user
              authentication and Stripe payment system.
            </p>
            <ul className="project_tech">
              <li>React.js/Redux</li>
              <li>Node.js/Express</li>
              <li>MongoDB/Mongoose</li>
              <li>Stripe</li>
              <li>SendGrid</li>
            </ul>
            <div className="project_links">
              <a href="https://github.com/bryanyi/E-Kars">
                <i className="fab fa-github"></i>
              </a>
              <a href="#">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="project_image">
          <a href="#Projects">
            <img src="/images/ekars.png" alt="E-Kars Project" />
          </a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="projects_display">
        <div className="right-project_content">
          <h3 className="project_title">World COVID19 Vaccinations</h3>
          <div className="right-project_description">
            <p>
              How many COVID19 vaccinations have been done in other countries?
              This application shows you visual data about how many total people
              have been vaccinated, which vaccination was used, and which
              country has performed the most vaccinations.
            </p>
            <ul className="right-project_tech">
              <li>React.js</li>
              <li>Python/Django</li>
              <li>SQL</li>
              <li>Chart.js</li>
            </ul>
            <div className="right-project_links">
              <a href="https://github.com/bryanyi/World-COVID19-Vaccine">
                <i className="fab fa-github"></i>
              </a>
              <a href="#">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="right-project_image">
          <a href="#Projects">
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

import React from "react";

const Ekars = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="projects_display"
    >
      <div className="right-project_content">
        <h3 className="project_title">Reddityi</h3>
        <div className="right-project_description">
          <p>
            The key points of this project is to demonstrate a working knowledge of
            of connecting a Node.js backend to a Next.js frontend using GraphQL to
            query user posts from a PostgreSQL database and Redis for cacheing, while maintaining type safety
            with Typescript throughout the entire stack. TypeORM is utilized to form relationships between different entities such as
            users, posts, and votes.
          </p>
          <ul className="right-project_tech">
            <li>Next.js/Typescript</li>
            <li>Node</li>
            <li>TypeORM</li>
            <li>GraphQL/Apollo</li>
            <li>PostgreSQL</li>
            <li>Docker</li>
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

export default Ekars;

import React from "react";
import "../css/Projects.css";
import Ekars from "./projects/Ekars";
import Reddityi from "./projects/Reddityi";

const Projects = () => {
  return (
    <section id="Projects">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="projects_heading"
      >
        <h2>Some Things I've Built</h2>
        {/* <div id="heroku">
          Heroku taking too long? View detailed gifs in my github links!
        </div> */}
      </div>

      <Reddityi />
      <Ekars />
    </section>
  );
};

export default Projects;

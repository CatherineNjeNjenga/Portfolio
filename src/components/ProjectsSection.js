import React from "react";
import "../css/Projects.css";
import RateCard from "./projects/RateCard";
import BragBook from "./projects/BragBook";

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

      <RateCard />
      <BragBook />
    </section>
  );
};

export default Projects;

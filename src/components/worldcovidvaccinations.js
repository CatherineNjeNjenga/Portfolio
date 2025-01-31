import React from "react";
import "../css/worldcovidvaccinations.css";

const rateCardScreen = () => {
  return (
    <div className="worldcovidvaccinationsScreen">
      <div className="title">
        <h1>World COVID19 Vaccinations</h1>
      </div>
      <div className="key__features">
        <div className="features__list">
          <h2>Key Features</h2>
          <ul>
            <li>
              4000+ records collected from{" "}
              <span className="feat_emph">Kaggle</span> and stored in{" "}
              <span className="feat_emph">
                Supabase PostgreSQL database
              </span>
              .
            </li>
            <li>
              Class based views using <span className="feat_emph">Django</span>
            </li>
            <li>
              Flask implemented to build backend{" "}
              <span className="feat_emph">RESTful APIs</span> endpoints to serve
              JSON data constructed from raw{" "}
              <span className="feat_emph">PostgreSQL</span>queries
            </li>
            <li>
              Customized <span className="feat_emph">D3.js</span> to display
              data to enhance the user experience and user interface.
            </li>
          </ul>
        </div>
        <div className="image"></div>
      </div>

      <div className="project__details">
        <div className="api__design"></div>
        <div className="sql"></div>
        <div className="chart"></div>
      </div>
    </div>
  );
};

export default rateCardScreen;

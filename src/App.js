import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import aos from "aos";
import "aos/dist/aos.css";
import "./css/App.css";

// COMPONENTS
import AboutMe from "./components/AboutMe";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import worldcovidvaccinationsScreen from "./components/worldcovidvaccinationsScreen";
import ekarsScreen from "./components/ekarsScreen";

const App = () => {
  const [sideToggle, setSideToggle] = useState(false);
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <div className="App">
      <NavBar hamburger={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <div className="content">
        <Introduction />
        <Projects />
        <AboutMe />
        <Contact />
        <Router>
          <Switch>
            <Route exact path="/e-kars" component={ekarsScreen} />
            <Route
              exact
              path="/world-covid19-vaccinations"
              component={worldcovidvaccinationsScreen}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;

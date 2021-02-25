import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-scroll";
import "../css/Introduction.css";

const Introduction = () => {
  const springReference = useSpring({
    opacity: 1,
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: 40 },
    delay: 1000,
    config: { mass: 1, tension: 350, friction: 10, duration: 800 },
  });

  const springH1 = useSpring({
    opacity: 1,
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: 20 },
    delay: 1000,
    config: { mass: 1, tension: 350, friction: 10, duration: 170 },
  });

  const springH2 = useSpring({
    opacity: 1,
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: 20 },
    delay: 1100,
    config: { mass: 1, tension: 350, friction: 10, duration: 170 },
  });
  const springH3 = useSpring({
    opacity: 1,
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: 20 },
    delay: 1200,
    config: { mass: 1, tension: 350, friction: 10, duration: 170 },
  });

  const springDesc = useSpring({
    opacity: 1,
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: 20 },
    delay: 1300,
    config: { mass: 1, tension: 350, friction: 10, duration: 170 },
  });

  const springLinks = useSpring({
    opacity: 1,
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: 20 },
    delay: 1400,
    config: { mass: 1, tension: 350, friction: 10, duration: 170 },
  });

  const springAction = useSpring({
    opacity: 1,
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: 20 },
    delay: 1500,
    config: { mass: 1, tension: 350, friction: 10, duration: 170 },
  });
  return (
    <section id="Introduction">
      <div className="intro">
        <animated.h1 style={springH1}>Hi, my name is</animated.h1>
        <animated.h2 style={springH2}>Bryan Yi.</animated.h2>
        <animated.h3 style={springH3}>
          I'm a Front-End Web Developer.
        </animated.h3>
      </div>
      <animated.div style={springDesc} className="intro_description">
        <p>
          I'm a web developer based in Los Angeles, CA with a passion for
          building extraordinary websites and applications.
        </p>
      </animated.div>

      <animated.div style={springLinks} className="personal_links">
        <a href="https://www.linkedin.com/in/bryantaeyi/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/bryanyi">
          <i className="fab fa-github"></i>
        </a>
        <a href="#">
          <i className="far fa-file"></i>
        </a>
      </animated.div>
      <animated.div style={springAction} className="intro_action">
        <Link to="Projects" smooth={true} duration={1000} offset={-55}>
          Projects
        </Link>
        <Link to="Contact" smooth={true} duration={1050}>
          Contact me
        </Link>
      </animated.div>
    </section>
  );
};

export default Introduction;

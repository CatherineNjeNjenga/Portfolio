import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <section data-aos="fade" data-aos-duration="1000" id="Contact">
      <h2>Let's Connect!</h2>

      <div className="contact-desc">
        <p>
          I am currently looking for new opportunities to advance my career in
          Web Development. If you would like to connect, please feel free to
          email any time!
        </p>
      </div>

      <div className="contact_email">
        <a href="mailto:bryanyi1206@gmail.com" id="contactme">
          Contact Me
        </a>
      </div>

      <div className="footer">
        <p>
          Coded by <span>Bryan Yi</span>
        </p>
        <p>
          Design inspired by{" "}
          <a href="https://github.com/bchiang7">Brittany Chiang</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;

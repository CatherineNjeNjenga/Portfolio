import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <section data-aos="fade" data-aos-duration="1000" id="Contact">
      <h2>Let's Connect!</h2>

      <div className="contact-desc">
        <p>
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
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

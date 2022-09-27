import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" className="container flex flex-column contact">
      <h2>Interested in Working Together?</h2>
      <a href="mailto: archjo6@gmail.com">
        <button className="btn btn-primary margin-bottom-md">
          Get In Touch
        </button>
      </a>
    </section>
  );
};

export default Contact;

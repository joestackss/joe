import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section
      id="testimonial"
      className="testimonial container testimonial__container"
    >
      <div
        className="flex flex-between"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2>Why people love my work!</h2>
      </div>

      <div className=" card-main flex flex-between margin-bottom-lg ">
        <div className="card-column flex-between ">
          <div
            className="card-col margin-bottom-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3>
              "Joseph is so easy to work with. He listened to what I had
              envisioned and brought it to life. I can’t recommend him enough.
              I’ll definitely be using him for all my needs."
            </h3>
            <p className="paragraph">
              Beatriz Alberti
              <span className="spans">- Co-Founder of Alberti Studio</span>
            </p>
          </div>
          <div
            className="card-col margin-bottom-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="300"
          >
            <h3>
              "Joseph is my go-to freelancer. I've been working with him for
              months already and looking forward to continuing our efforts. He
              knows exactly what to do and he does iit well."
            </h3>
            <p className="paragraph">
              Fay Goldstein
              <span className="spans">
                {" "}
                - Head of communication - Entree Capital
              </span>
            </p>
          </div>
          <div
            className="card-col"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="300"
          >
            <h3>
              "Joseph was a pleasure to work with on my website development
              project. He was very quick to get changes back to me, and worked
              well in collaboration to make the website look and function as
              desired. He is knowledgeable in website development, and
              provides a wonderful finished product."
            </h3>
            <p className="paragraph">
            Uwe Janotta
              <span className="spans"> - Ceo {"&"} Founder, Berit</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

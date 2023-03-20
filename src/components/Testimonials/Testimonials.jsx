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
              months already. He knows exactly what to do and he does it well."
            </h3>
            <p className="paragraph">
              Remi Abimbola
              <span className="spans"> - CEO - KazzipyHub</span>
            </p>
          </div>
          <div
            className="card-col"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="400"
          >
            <h3>
              "Joseph wrote clean codes and worked well in collaboration to make
              the website look and function as desired."
            </h3>
            <p className="paragraph">
              Uwe Janotta
              <span className="spans"> - Ceo {"&"} Founder, Berit</span>
            </p>
          </div>
          <div
            className="card-col"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="400"
          >
            <h3>
              "Joseph was incredibly responsive, had quick and professional
              turn around, and was able to complete projects perfectly. He was
              able to take a vague task and build it into exactly what I needed.
              "
            </h3>
            <p className="paragraph">
              Fay Goldstein
              <span className="spans">
                {" "}
                - Fmr. Head of Communication - Entrée Capital
              </span>
            </p>
          </div>

          <div
            className="card-col"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="400"
          >
            <h3>
              "Joseph did an excellent job supplying us with various animations
              that we needed for our project! We will be sure to use his skills
              once again in the nearest future!"
            </h3>
            <p className="paragraph">
              Viktor Kusmanov
              <span className="spans"> - Head of Media - Overplay Inc.</span>
            </p>
          </div>

          <div
            className="card-col"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="400"
          >
            <h3>
              "Joseph was amazing! He was always available, replied extremely
              fast and even provided the first draft of the file on the same day
              that we opened the contract."
            </h3>
            <p className="paragraph">
              Luka
              <span className="spans"> - Business Owner.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

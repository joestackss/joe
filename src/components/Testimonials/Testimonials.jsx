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
        <h2>Why people love our work!</h2>
      </div>

      <div className=" card-main flex flex-between margin-bottom-lg ">
        <div className="card-column flex-between ">
          <div
            className="card-col margin-bottom-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3>
              "Expert Vetted is so easy to work with. They listened to what I had
              envisioned and brought it to life. I can’t recommend them enough.
              I’ll definitely be using them for all my needs."
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
              "Expert Vetted is our go-to team. I've been working with them for
              months already. They knows exactly what to do and they does it well."
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
              "Expert Vetted wrote clean codes and worked well in collaboration to make
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
              "Expert Vetted were incredibly responsive, had quick and professional
              turn around, and were able to complete projects perfectly. They were
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
              "Expert Vetted did an excellent job supplying us with various animations
              that we needed for our project! We will be sure to use their skills
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
              "Expert Vetted were amazing! They were always available, replied extremely
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

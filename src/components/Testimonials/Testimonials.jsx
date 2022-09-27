import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonial" className="testimonial container testimonial__container">
      <div className="flex flex-between" data-aos="fade-up" data-aos-duration="1000">
        <h2>Why people love my work!</h2>
      </div>

      <div className=" card-main flex flex-between margin-bottom-lg ">
        <div className="card-column flex-between ">
          <div className="card-col margin-bottom-lg" data-aos="fade-up" data-aos-duration="1000">
            <h3>
              "The communication throughout the project was spot on and the
              genre of design was carried out well."
            </h3>
            <p className="paragraph">
              Wilson Bright{" "}
              <span className="spans">- Co-Founder of BlockSurvey</span>{" "}
            </p>
          </div>
          <div className="card-col margin-bottom-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300">
            <h3>
              "The code was clean, easy to understand, and exactly what I was
              looking for.""
            </h3>
            <p className="paragraph">
              Philip Imperato{" "}
              <span className="spans"> - CEO of VisualBonus</span>
            </p>
          </div>
          <div className="card-col" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="600">
            <h3>
              "My vision was executed perfectly. The quality and speed of the
              work was excellent."
            </h3>
            <p className="paragraph">
              Zach Green{" "}
              <span className="spans"> - Founder of Hangxiety Shrink</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

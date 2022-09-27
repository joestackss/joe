import React from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Project from "../Projects/Project";
import Testimonials from "../Testimonials/Testimonials";
import Tools from "../Tools/Tools";

const Home = () => {
  return (
    <div>
      <Header />
      <Project />
      <Tools />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

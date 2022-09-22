import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Project from "./components/Projects/Project";
import Testimonials from "./components/Testimonials/Testimonials";
import Tools from "./components/Tools/Tools";
import Navs from "./components/Navbar/Navs";

function App() {
  return (
    <div className="App">
      <Router>
        <Navs />
        <Routes></Routes>
      </Router>
      <Header />
      <Project />
      <Tools />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

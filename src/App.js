import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Navs from "./components/Navbar/Navs";
import Allprojects from "./components/Allprojects/Allprojects";
import Home from "./components/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navs />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/allprojects" element={<Allprojects />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

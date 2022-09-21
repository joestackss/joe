import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Projects/Project";
import Testimonials from "./components/Testimonials/Testimonials";
import Tools from "./components/Tools/Tools";

function App() {
  return (
    <div className="App">
      <Header />
      <Project />
      <Tools />
      <Testimonials />
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import TechSkills from "./Components/TechSkills/TechSkills";
import Contact from "./Components/Contact/Contact";
import React from "react";

function App() {
  return (
    <>
      <Navbar />
      <div className="with-topnav">
        <Home />
        <AboutMe />
        <TechSkills />
        <Contact />
      </div>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Skills from "../Skills/Skills";
import "./About.css";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <h1 className="headerabout">ABOUT ME</h1>
        <div className="aboutcontainer">
          <Education />
        </div>

        <div id="skills" className="skills">
          <Skills />
        </div>

        <div id="projects" className="projects">
          <Projects />
        </div>

        <div id="experience" className="experience">
          <Experience />
        </div>
      </div>
    </>
  );
};

export default About;

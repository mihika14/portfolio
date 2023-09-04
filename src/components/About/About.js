import React from "react";
import Skills from "../Skills/Skills";
import "./About.css";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';



const About = () => {
  return (
    <>
      <div className="about" id="about">
        <h1 className="headerabout">ABOUT ME</h1>
        <div className="aboutcontainer">
          <Education />
        </div>
        <Zoom inside>
        <div id="skills" className="skills">
          <Skills /> 
        </div>
        </Zoom>
        <Flip left>
        <div id="projects" className="projects">
          <Projects />
        </div>
        </Flip>
        <Zoom inside>
        <div id="experience" className="experience">
          <Experience />
        </div>
        </Zoom>
      </div>
    </>
  );
};

export default About;

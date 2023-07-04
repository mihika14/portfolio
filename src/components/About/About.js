import React from "react";
import "./About.css";
import image1 from "./assests/image.png";


const About = () => {
  return (
    <div id="ui about">
      <div className="ui about">
          <div className="ui left aligned container">
            <div className="ui me">
              <h2 className="ui header1">Hey There!<span className="wave">👋</span></h2>
              <h1 className="ui name">I'm Mihika</h1>
              <h4 className="ui aboutme">
                <h1 className="ui aboutme2">A Full Stack Developer</h1>
                <p className="ui aboutme3">
                  with expertise in web design and
                  coding languages such as HTML, CSS, and JavaScript.
                  Additionally, I specialize in web development frameworks like
                  React.js. I have a strong command over languages like Node.js,
                  MongoDB, and possess knowledge in data structures and
                  algorithms using languages like C/C++ and Python
                </p>
              </h4>
              <a href="https://github.com/mihika14" target="_blank">
                <i className="big black github icon"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mihikasaxena14/"
                target="_blank"
              >
                <i className="big linkedin icon"></i>
              </a>
              <a href="https://www.instagram.com/_mihika14_/" target="_blank">
                <i className="big pink instagram icon"></i>
              </a>
              <br/>
              <br/>
              <a
                href="https://drive.google.com/file/d/1FE1JIMWidPUFPmdpUopGy1JG5dECuRaT/view?usp=drive_linkt"
                target="_blank"
              >
                <button className="ui resume">Resume</button>
              </a>
              <a
                href="mailto: mihikasaxena13@gmail.com"
                target="_blank"
              >
                <button className="ui resume">Contact me</button>
              </a>
            </div>
          </div>
          <div className="ui right aligned container">
          <img className="image1" src={image1} alt="error" />
          </div>
        </div>
        </div>
  
  );
};

export default About;

import React from "react";
import "./About.css";
import image1 from "./image.jpg"

const About = () => {
   return (
      <div id="ui about" >
         <div className="ui me">
            <h2 className="ui header1">Hi There , I'm</h2>
            <h1 className="ui name">Mihika Saxena</h1>
            <h4 className="ui aboutme">
               <h1 className="ui aboutme2">A Front-End Developer</h1> <p className="ui aboutme3">with expertise in web design, coding languages such as HTML, CSS, and JavaScript, and web development frameworks like React.
                  I specialize in creating visually appealing and intuitive user interfaces that enhance the user experience.
                  My dedication to staying up-to-date with the latest trends and technologies allows me to continuously improve my skills and create innovative solutions. </p>
            </h4>
         </div>
         <br />
         <div className="ui contact">
         <a href="https://drive.google.com/file/d/1SKeKQKKu4ebOoKxEjtW63rg66BMlQ-ZB/view?usp=share_link" target="_blank">
            <button className="ui resume"> Resume
            </button>
         </a>
         <div className="ui icons">
         <a href="https://github.com/mihika14" target="_blank">
            <i className="huge black github icon"></i></a>
         <a href="https://www.linkedin.com/in/mihikasaxena14/" target="_blank">
            <i className="huge linkedin icon"></i></a>
         <a href="https://www.instagram.com/_mihika14_/" target="_blank">
            <i className="huge pink instagram icon"></i></a>
         <a href="mailto: mihikasaxena13@gmail.com" target="_blank">
            <i className="huge red envelope square icon"></i></a>
         </div>
            </div>
      </div>

   )
};

export default About;
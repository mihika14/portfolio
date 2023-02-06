import React from "react";
import "./About.css";
import image1 from "./image.jpg"

const About = () => {
   return (
      <div id="about" >
          <img className="myimg" src={image1}/>
         <div className="segment1">
            <h2 className="header1">HI THERE , I'M</h2>
            <h1 className="name">MIHIKA SAXENA</h1>
            <p className="aboutme">A frontend Web-Developer</p>
         </div>   
         <div className="segment2">
           
         </div>

      </div >
   )
};

export default About;
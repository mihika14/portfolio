import React from "react";
import "./About.css";
import image1 from "./image.jpg"

const About = () => {
   return (
      <div id="ui about" >
         <div className="ui grid">
            <div className="one wide column">
               <img className="myimg" src={image1} />
            </div>
            <div className="ui about2">
               <div className="four wide row">
                  <div className="ui segment">
                     <h2 className="ui header1">HI THERE , I'M</h2>
                     <h1 className="ui name">MIHIKA SAXENA</h1>
                     <p className="ui aboutme">A frontend Web-Developer</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="segment2">

         </div>

      </div >
   )
};

export default About;
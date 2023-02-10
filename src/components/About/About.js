import React from "react";
import "./About.css";
import image1 from "./image.jpg"

const About = () => {


   return (
      <div id="ui about" >
         <div className="ui internally celled grid">
            <div class="row">
               <div className="five wide column">
                  <img className="myimg" src={image1} />
               </div>
               <div className="nine wide column">

                  <h2 className="ui header1">HI THERE , I'M</h2>
                  <h1 className="ui name">MIHIKA SAXENA</h1>
                  <h4 className="ui aboutme">
                     A driven and well-rounded individual with a passion for both technology and sports.
                     As a Front-End Developer, I have honed my technical skills and possess a keen eye for design,
                     allowing me to create visually appealing and user-friendly digital experiences.<br/>
                     As a student at Shaheed Rajguru College of Applied Sciences for Women (Delhi University), I am constantly seeking
                     new opportunities to learn and grow in my field.
                     In addition to my academic pursuits, I am also a talented hockey player, having achieved national level recognition.</h4>
                  <br />
                  <a href="https://drive.google.com/file/d/1SKeKQKKu4ebOoKxEjtW63rg66BMlQ-ZB/view?usp=share_link" target="_blank">
                     <button className="ui button">
                        Resume
                     </button>
                  </a>
                  <a href="https://github.com/mihika14" target="_blank">
                     <i className="big github icon"></i></a>
                  <a href="https://www.linkedin.com/in/mihikasaxena14/" target="_blank">
                     <i className="big linkedin icon"></i></a>
               </div>
            </div>
         </div>

      </div >
   )
};

export default About;
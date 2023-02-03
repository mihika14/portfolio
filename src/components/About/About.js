import React from "react";

const About = () => {
   return (
      <section id="about" >
         <div className="ui segment">
            <h1 className="ui left aligned header">Hi , My name is Mihika.</h1>
            <h1>I love building Apps!</h1>
            <p> lorem4</p>

            <div className="ui animated button" tabIndex="0">
               <div className="visible content">
                  <a href= '#Contact'>Contact me</a></div>
               <div className="hidden content">
                  <i className="right arrow icon"></i>
               </div>
            </div>
            <div className="ui animated button" tabIndex="0">
               <div className="visible content">
               <a href="#Projects">See my Past work</a></div>
               <div className="hidden content">
                  <i className="right arrow icon"></i>
               </div>
            </div>
            <div className="ui top right aligned small image">
               <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Z9qdNLDsQ3EB-xSc7s9mo6SFeXG-aI0WyA&usqp=CAU">
               </img>
            </div>
         </div>


      </section >
   )
};

export default About;
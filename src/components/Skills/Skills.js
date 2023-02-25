import React from "react";
import "./Skills.css";

const Skills = () => {


   const languages = [
      {
         name: "HTML",
         percent: "90%",
      },
      {
         name: "CSS",
         percent: "75%",
      },
      {
         name: "React.Js",
         percent: "75%",
      },
      {
         name: "C",
         percent: "70%",
      },
      {
         name: "C++",
         percent: "80%",
      },
      {
         name: "Python",
         percent: "50%",
      },
      {
         name: "JavaScript",
         percent: "60%",
      },


   ]
   return (
      <div id="ui Skills">
         <h1 className="ui header4">LANGUAGES AND TOOLS</h1>
         <div className="SkillContainer">
            <div className="SkillCard">
               <div className="SkillBody">
                  {languages.map((language) => (
                     <div className="Skill">
                        <div className="SkillName">{language.name}</div>
                        <div className="SkillLevel">
                           <div className="SkillPercent" style={{ width: language.percent }}></div>
                        </div>
                        <div className="SkillPercentnumber">{language.percent}</div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
};

export default Skills;
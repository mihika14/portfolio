import React from "react";
import SkillCard from "./Cards/Cards";
import "./Skills.css";
import js from './assests/java.png';
import cpp from './assests/c++.png';
import python from './assests/python.png';
import react from './assests/reacr.png';
import css from './assests/css.png';
import html from './assests/html.png';
import C from './assests/C.png';
import semanticui from './assests/semanticui.png';
import matlab from './assests/matlab.png';
const Skills = () => {
   return (
      <div className="ui Skills">
            <h1 className="ui header4">LANGUAGES AND TOOLS</h1>
            {/* <SkillCard/> */}
            <img className="ui skillimg" src={cpp} />
            <img className="ui skillimg" src={cpp} />
            <img className="ui skillimg" src={cpp} />
            <img className="ui skillimg" src={cpp} />
            <img className="ui skillimg" src={cpp} />
            <img className="ui skillimg" src={cpp} />
            <img className="ui skillimg" src={cpp} />
      </div>

   )
};

export default Skills;
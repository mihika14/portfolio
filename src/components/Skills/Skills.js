import React from "react";
import "./Skills.css";
import { FaPython, FaReact } from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoPython,
  BiLogoHtml5,
} from "react-icons/bi";
import { DiNodejs, DiCss3 } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { FcElectronics } from "react-icons/fc";
import { BsGit } from "react-icons/bs";
import { SiSemanticuireact } from "react-icons/si";

const Skills = () => {
  const icons = [
    { name: "HTML", component: BiLogoHtml5, color: "#e34c26" },
    { name: "CSS", component: DiCss3, color: "#2965f1" },
    { name: "React.js", component: FaReact, color: "#61dbfb" },
    { name: "JavaScript", component: BiLogoJavascript, color: "#f0db4f" },
    { name: "Node.js", component: DiNodejs, color: "#68a063" },
    { name: "MongoDB", component: BiLogoMongodb, color: "#439934" },
    { name: "Python", component: BiLogoPython, color: "#306998" },
    { name: "C++", component: TbBrandCpp, color: "#00599c" },
    { name: "Electronics", component: FcElectronics, color: "#fcd116" },
    { name: "Git", component: BsGit, color: "#f34f29" },
    {
      name: "Semantic-UI React",
      component: SiSemanticuireact,
      color: "#61dafb",
    },
  ];

  return (
    <div>
      <h1 className="skills-header">Skills & Technologies</h1>

      <div className="skills-container">
        {icons.map((icon, index) => (
          <div className="skill-card" key={index}>
            <div className="icon" style={{ color: icon.color }}>
              {React.createElement(icon.component)}
            </div>
            <div className="skill-name">{icon.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

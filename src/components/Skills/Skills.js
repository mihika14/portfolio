import React from "react";
import "./Skills.css";
import imageskill from "./assests/imageskill.png";
import { FaPython,FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoMongodb, BiLogoPython ,BiLogoHtml5} from "react-icons/bi";
import { DiNodejs , DiCss3} from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { FcElectronics } from "react-icons/fc";
import { BsGit } from "react-icons/bs";
import { SiSemanticuireact} from 'react-icons/si'

const Skills = () => {
  const icons = [
    { name: "HTML", component: BiLogoHtml5 },
    { name: "CSS", component: DiCss3 },
    { name: "React.js", component: FaReact },
    { name: "JavaScript", component: BiLogoJavascript },
    { name: "Node.js", component: DiNodejs },
    { name: "MongoDB", component: BiLogoMongodb },
    { name: "Python", component: BiLogoPython },
    { name: "C++", component: TbBrandCpp },
    { name: "Electronics", component: FcElectronics },
    { name: "Git", component: BsGit },
    { name: "Semantic-UI React" , component: SiSemanticuireact}
  ];

  return (
    <div id="ui Skills">
       <h1 className="ui header4">SKILLS AND TECHNOLOGIES</h1>
       <div className="ui skills">
       <div className="ui left aligned container">
            <img className="imageskill" src= {imageskill} />
            </div>
          <div className="ui right aligned container">
            <div className="iconsskills">
              {icons.map((icon, index) => {
                const IconComponent = icon.component;
                return (
                  <div key={index} className="icon-container">
                    <IconComponent className="iconskill" />
                    <span className="icon-text">{icon.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          </div>
    </div>
  );
};

export default Skills;

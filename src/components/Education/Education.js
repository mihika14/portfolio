import React from "react";
import dma from "./assests/dma (2).png";
import srcasw from "./assests/srcasw (2).png";
import "./Education.css";

const Education = () => {
  const educationDetails = [
    {
      image: srcasw,
      title: "SRCASW",
      subtitle: "Delhi University",
      description: "Bsc(H) Electronics , 8.47 CGPA",
    },
    {
      image: dma,
      title: "D.M.A",
      subtitle: "CBSE",
      description: "Intermediate , 87.00%",
    },
    {
      image: dma,
      title: "D.M.A",
      subtitle: "CBSE",
      description: "High School ,92.6%",
    },
  ];

  return (
    <div id="ui Education">
      <div className="ui Education">
        <h1 className="ui header4">EDUCATION</h1>
        <div className="educationcard">
          {educationDetails.map((education, index) => (
            <div className="edu_card">
              <img src={education.image} class="card_load" />
              <div className="educationtext">
                <div className="card_load_extreme_title">{education.title}</div>
                <div className="card_load_extreme_descripion">
                  {education.subtitle}
                </div>
                <div className="card_load_extreme_descripion2">
                  {education.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

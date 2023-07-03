import React from "react";
import dma from "./assests/dma (2).png";
import srcasw from "./assests/srcasw (2).png";
import "./Education.css";

const Education = () => {
  const educationDetails = [
    {
      image: srcasw,
      title: "SRCASW, Delhi University",
      subtitle: "Bsc(H) Electronics",
      percentage: "8.47 CGPA",
    },
    {
      image: dma,
      title: "DMA, Rampur",
      subtitle: "Intermediate",
      percentage: "87%",
    },
    {
      image: dma,
      title: "DMA, Rampur",
      subtitle: "High School",
      percentage: "92.6%",
    },
  ];

  return (
    <div id="ui Education">
      <h1 className="ui header4">EDUCATION</h1>
      <div className="educationcard">
      {educationDetails.map((education, index) => (
         
        <div className="edu_card" key={index}>
          <div className="edu_card-img">
            <img className="educationimage" src={education.image} alt="Education" />
          </div>
          <div className="edu_card-info">
            <p className="edu_text-body">{education.title}</p>
            <p className="edu_text-subtitle">{education.subtitle}</p>
            <p className="edu_text-percentage">{education.percentage}</p>
          </div>
        </div>
      
      ))}
      </div>
    </div>
  );
};

export default Education;

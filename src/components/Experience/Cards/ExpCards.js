import React from "react";
import "./ExpCard.css";
import simmi from "./assests/simmi.png";
import vidyut from "./assests/vidyut.png";
import react from "./assests/react.png";
import mongo from "./assests/mongo.png";
import python from "./assests/pytjom.png";

const ExpCard = () => {
  const details = [
    {
      image: simmi,
      title: "REACT DEVELOPER",
      organization: "Simmi Foundation",
      date: "(Sept 2022-Dec 2022)",
      body: "During my three-month internship at Simmi Foundation, I had the opportunity to work with a team of developers and gain practical experience in React.js, JavaScript, HTML, and CSS . Worked on various websites , providing me with hands-on experience and exposure to Front-end web development best practices.",
      link: "https://drive.google.com/drive/folders/1Cc6YIGhz8BsYNDIQ8EiSPD5CG0Nygtr8?usp=sharing",
    },
    {
      image: vidyut,
      title: "CORE COUNCIL",
      organization: "Vidyut",
      body: "As a core committee member of the Vidyut-Electronics Society at SRCASW, I leveraged my skills in event management,teamwork,and leadership to successfully organize and execute multiple events.Through effective coordination, communication,I ensured the smooth functioning and played a vital role in their overall success.",
      link: "https://www.instagram.com/vidyut.srcasw/?hl=en",
    },
    {
      image: react,
      title: "MODERN REACT WITH REDUX",
      organization: "Udemy",
      body: "This course provided me with a solid understanding of how to create complex and dynamic user interfaces using React.The course also covered state management in depth, which is crucial for building complex React applications. And how to use more advanced state management libraries such as Redux to handle complex state.",
    },
    {
      image: mongo,
      title: "AUTHENICATION SERVER",
      organization: "Devtown",
      body: "In a seven-day workshop, I was able to develop a secure and reliable authentication server using MongoDB and Node.js . During this project, I learned how to integrate MongoDB, with Node.js. This project provided me with hands-on experience in building a secure and scalable authentication system using MongoDB and Node.js.",
      link: "https://drive.google.com/file/d/1P_XCKgmGgM0EDWYNPfWHhAQ10LLoKkTY/view?usp=sharing",
    },
    {
      image: python,
      title: "ADVANCE PYTHON",
      organization: "CETPA",
      body: "During this workshop, I learned about the basics of Python programming, including classes, functions, and the popular data analysis library pandas. I also had the opportunity to build projects using Python's GUI library Tkinter, and also did a project i.e Zomato Food Analysis using libraries pandas and Numpy.",
      link: "https://drive.google.com/file/d/1GyhEvz8CjE4hWXr58kfetYCIwk9j4a_R/view?usp=sharing",
    },
  ];
  return (
    <div className="expcards">
      {details.map((detail, index) => (
        <div className="expcard" key={index}>
          <img className="expimage" src={detail.image}></img>
          <div className="expcontent">
            <h1 className="exptitle">{detail.title}</h1>
            <h2 className="exporganization">{detail.organization}</h2>
            <p className="expdesc">{detail.body}</p>
            <a href={detail.link} className="button">
              Certificates
              <div className="arrow">›</div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpCard;

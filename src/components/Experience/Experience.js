import React from "react";
import "./Experience.css";
import simmi from "./assests/simmi.png";
import vidyut from "./assests/vidyut.png";
import react from "./assests/react.png";
import mongo from "./assests/mongo.png";
import python from "./assests/pytjom.png";

const jobdetails = [
  {
    date: "(Sept 2022-Dec 2022)",
    title: "WEB DEVELOPER",
    organization: "Simmi Foundation",
    body: "During my three-month internship at Simmi Foundation, I had the opportunity to work with a team of developers and gain practical experience in React.js, JavaScript, HTML, and CSS. Worked on various websites, providing me with hands-on experience and exposure to Front-end web development best practices.",
    link: "https://drive.google.com/drive/folders/1Cc6YIGhz8BsYNDIQ8EiSPD5CG0Nygtr8?usp=sharing",
  },
  {
    date: "(August 2023-Current)",
    title: "GRADUATE ENGINEER TRAINEE",
    organization: "MICROLAND",
    body: "Troubleshooting network/user issues, ticket handling, system configuration, emergencies, vendor coordination, software tasks, onsite support, problem-solving, script preparation, remote troubleshooting, cross-team coordination.",
    
  },
];

const certifications = [
  {
    image: react,
    title: "MODERN REACT WITH REDUX",
    organization: "Udemy",
    body: "This course provided me with a solid understanding of how to create complex and dynamic user interfaces using React. The course also covered state management in depth, which is crucial for building complex React applications. And how to use more advanced state management libraries such as Redux to handle complex state.",
  },
  {
    image: mongo,
    title: "AUTHENTICATION SERVER",
    organization: "Devtown",
    body: "In a seven-day workshop, I was able to develop a secure and reliable authentication server using MongoDB and Node.js. During this project, I learned how to integrate MongoDB with Node.js. This project provided me with hands-on experience in building a secure and scalable authentication system using MongoDB and Node.js.",
    link: "https://drive.google.com/file/d/1P_XCKgmGgM0EDWYNPfWHhAQ10LLoKkTY/view?usp=sharing",
  },
  {
    image: python,
    title: "ADVANCE PYTHON",
    organization: "CETPA",
    body: "During this workshop, I learned about the basics of Python programming, including classes, functions, and the popular data analysis library pandas. I also had the opportunity to build projects using Python's GUI library Tkinter and did a project, i.e., Zomato Food Analysis using libraries pandas and Numpy.",
    link: "https://drive.google.com/file/d/1GyhEvz8CjE4hWXr58kfetYCIwk9j4a_R/view?usp=sharing",
  },
];

const Experience = () => {
  return (
    <div>
      <div className="project-header">Experience</div>
      <div className="experience-certification">
        <div className="exp">
          <ul className="timeline">
            {jobdetails.map((jobdetail, index) => (
              <li className="event" key={index}>
                <h3 className="exp-title">
                  {jobdetail.title} at {jobdetail.organization}
                </h3>
                <div className="exp-year">{jobdetail.date} </div>
                <p className="exp-inst">{jobdetail.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <h1 className="project-header">Certification</h1>
         <div className="cert-cards">
          {certifications.map((detail, index) => (
            <div className="cert-card" key={index}>
              <img className="cert-image" src={detail.image} alt={detail.title} />
              <div className="cert-content">
                <h1 className="cert-title">{detail.title}</h1>
                <h2 className="cert-organization">{detail.organization}</h2>
                <p className="cert-desc">{detail.body}</p>
                <a href={detail.link} className="button">
                  Certificates
                  <div className="arrow"></div>
                </a>
              </div>
            </div>
          ))}
        </div> *
      </div>
    </div>
  );
};

export default Experience;

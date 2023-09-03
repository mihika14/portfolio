import React from "react";
import "./Projects.css";
import { AiOutlineGithub } from "react-icons/ai"; // Import the icon component correctly

const Projects = () => {
  const projectOptions = [
    {
      title: "E-COMMERCE WEBSITE",
      body: "This e-commerce website has been built using React and incorporates the PayPal API for secure payment processing. The user interface has been styled with Semantic UI React to provide a clean and modern layout. The website offers a wide range of functionalities, including a shopping cart where users can conveniently add items.",
      href: "https://github.com/mihika14/e-commerce",
    },
    {
      title: "TASK MANAGER",
      body: "It has been developed using React and provides a comprehensive CRUD (Create, Read, Update, Delete) functionality. Additionally, this application utilizes MongoDB as the database for storing user information such as passwords, names, and email addresses. For authentication of user Node.js has been utilized.",
      href: "https://github.com/mihika14/Student-adminpanel",
    },
    {
      title: "IMAGE BROWSER",
      body: "This image browser has been built using React and incorporates the unsplash API, allowing users to discover and explore a vast collection of high-quality images. This application has been developed using class components in React, with HTML, receiving API requests using Axios and Semantic UI for styling.",
      href: "https://github.com/mihika14/image-browser",
    },
  ];

  return (
    <div>
      <h1 className="project-header">Projects</h1>
      <div className="project-cards">
        {projectOptions.map((option, index) => (
          <div className="project-card" key={index}>
            <p className="tip">{option.title}</p>
            <p className="second-text">{option.body}</p>
            <div className="project-card__links">
              <div>
                <a className="project-link" href={option.href} target="_blank" rel="noopener noreferrer">
                  Click on the Link to Access Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

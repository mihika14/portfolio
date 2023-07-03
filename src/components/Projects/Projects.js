import React from "react";
import "./Projects.css";
import todo from "./assests/todo.png";
import browser from "./assests/image.png";
import widgets from "./assests/widgets.png";
import ecommerce from "./assests/ecommerce.png";

const Projects = () => {
  const projectOptions = [
    {
      image: ecommerce,
      title: "E-COMMERCE WEBSITE",
      body: "This e-commerce website has been built using React and incorporates the PayPal API for secure payment processing. The user interface has been styled with Semantic UI React to provide a clean and modern layout. The website offers a wide range of functionalities, including a shopping cart where users can conveniently add items.",
      href: "https://github.com/mihika14/e-commerce",
    },
    {
      image: todo,
      title: "TASK MANAGER",
      body: "It has been developed using React and provides a comprehensive CRUD (Create, Read, Update, Delete) functionality. Additionally, this application utilizes MongoDB as the database for storing user information such as passwords, names, and email addresses. For authentication of user Node.js has been utilized.",
      href: "https://github.com/mihika14/crud",
    },
    {
      image: browser,
      title: "IMAGE BROWSER",
      body: "This image browser has been built using React and incorporates the unsplash API, allowing users to discover and explore a vast collection of high-quality images.This application has been developed using class components in React, with HTML , recieving API requests using Axios and Semantic UI for styling. ",
      href: "https://github.com/mihika14/image-browser",
    },
  ];

  return (
    <div id="ui project">
      <h1 className="ui header4">PROJECTS</h1>
      <div className="projectscard">
        {projectOptions.map((option, index) => (
          <div className="card">
            <div className="card__img">
              <img src={option.image} alt={option.title} target='/blank'/>
            </div>
            <div className="card__descr-wrapper">
              <p className="card__title">{option.title}</p>
              <p className="card__descr">{option.body}</p>
              <div className="card__links">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    className="svg"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.5 1.9 1.9 4.6 2.9 6.5 1.3 1.6-1.3 1-4.3-1.3-6.5-1.9-1.9-4.6-2.9-6.5-1.3zm-1.9-8.9c-1.6.7-2.6 3.6-1.9 6.2.7 1.9 2.6 3.6 4.9 2.9 1.9-.7 2.9-3.6 2.2-6.2-.6-1.9-3.6-3.6-5.2-2.9z"></path>
                  </svg>
                  <a className="link" href={option.href}>
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

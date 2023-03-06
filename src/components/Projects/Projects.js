import React from "react";
import "./Projects.css";
import todo from "./assests/todo.png";
import browser from "./assests/image.png";
import widgets from "./assests/widgets.png"

const Projects = () => {
    const projectOptions = [
      {
        image: todo,
        title: "TASK MANAGER",
        subtitle: "Built using React-hooks, semantic-ui for CSS and HTML",
        body: "This application has been developed using React-hooks and styled with Semantic UI for a clean and modern HTML and CSS layout. It provides a comprehensive CRUD (Create, Read, Update, Delete) functionality, allowing users to efficiently manage their tasks by adding, removing, updating, and reading"
      },
    //   {
    //     image: todo,
    //     title: "VIDEO BROWSER",
    //     subtitle: "Built using React, integrated with YouTube's API, CSS and HTML",
    //     body: "A user can watch videos in it. This application has been developed using class components in React, with HTML and Semantic UI for styling. It is also integrated with the YouTube API, providing users with access to a vast collection of video content within the app's interface."
    //   },
      {
        image: browser,
        title: "IMAGE BROWSER",
        subtitle: "Built using React, CSS and HTML, integrated with Unsplash's API",
        body: "A user can search for a wide range of photos. This application has been developed using class components in React, with HTML and Semantic UI for styling. It is also integrated with the Unsplash API, allowing users to access a wide range of high-quality images to use within the app's interface."
      },
      {
        image: widgets,
        title: "WIDGETS APP",
        subtitle: "Built using React-hooks,CSS and HTML and integrated with Google Translations API , Wikipedia's API ",
        body: "This application has been built using React Hooks, including useState, useRef, useEffect, and other important tools for efficient state management and rendering optimization. Additionally, the app has incorporated React Router DOM."
      }
    ];
  
    return (
      <div className="ui project">
        <h1 className="ui header4">PROJECTS</h1>
        <div className="projectscard">
        {projectOptions.map((option, index) => (
          <article key={index} className="cardproject">
            <div className="temporary_text">
              <img className="projectimage" src={option.image} alt={option.title} />
            </div>
            <div className="card_contentproject">
              <span className="card_titleproject">{option.title}</span>
              <span className="card_subtitleproject">{option.subtitle}</span>
              <p className="card_descriptionproject">{option.body}</p>
            </div>
          </article>
        ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  
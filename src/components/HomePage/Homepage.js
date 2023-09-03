import React from "react";
import "./Homepage.css";
import { SiGmail } from "react-icons/si";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const HomePage = () => {
  return (
    <>
      <div className="homepagecontainer" id="homepage">
        <div className="homepage">
          <div className="headerhomepagecontainer">
            <div className="headerhomepage1">
              Welcome to my corner of the web!
            </div>
            <span className="intro">Hi , I'm <span className="intro-name"> Mihika</span></span>
            <div className="hometextcontainer">A Full Stack Web Developer</div>
          </div>
          
        </div>
        <div className="contact-container">
          <div class="contact-card">
            <a class="value" href="https://github.com/mihika14">
              <AiFillGithub style={{ color: "black" }} />
            </a>
            <a class="value" href="https://www.instagram.com/_mihika14_/">
              <AiOutlineInstagram style={{ color: "#b6354c" }} />
            </a>
            <a class="value" href="https://www.linkedin.com/in/mihikasaxena14/">
              <BsLinkedin style={{ color: "blue" }} />
            </a>
            <a class="value" href="mailto:mihikasaxena13@gmail.com">
              <SiGmail style={{ color: "red" }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;

import React from "react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Education from "../Education/Education"
import Experience from "../Experience/Experience";
import Achievements from "../Achievements/Achievements";
import Projects from "../Projects/Projects";
import "./Homepage.css";

const HomePage = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
   
    return (
        <div id="ui homepage">
            <button className="ui arrow" onClick={scrollToTop}>
            ↑            
            </button>
            < About />           
            <Skills />  
            <Education />            
            <Experience />
            <Projects/>
            <Achievements/>
        </div>
    )
}
export default HomePage;

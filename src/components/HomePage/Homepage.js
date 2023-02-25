import React from "react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Education from "../Education/Education"
import Navbar from "../Navbar/Navbar";
import Experience from "../Experience/Experience";
import "./Homepage.css";

const HomePage = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div>
            <div className="ui arrow" onClick={scrollToTop}>
                Scroll to top
                <i className="huge arrow alternate circle up icon"></i>
            </div>
            <Navbar />
            < About />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Skills />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Education />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Experience />
        </div>
    )
}
export default HomePage;

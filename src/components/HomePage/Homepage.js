import React from "react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects"
import Education from "../Education/Education"
import Navbar from "../Navbar/Navbar";
import "./Homepage.css";

const HomePage = () => {
    return (
        <div>
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
        </div>
    )
}
export default HomePage;
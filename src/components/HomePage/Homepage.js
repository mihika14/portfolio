import React from "react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects"
import Education from "../Education/Education"
import Navbar from "../Navbar/Navbar";

const HomePage = () => {
    return (
        <div>
            <div class="ui grid">
            <div class="three wide column">
                <Navbar />
            </div>
            <div className="nine wide column">
                < About />
            </div>
        </div>
</div>

    )



}

export default HomePage;
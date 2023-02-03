import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import HomePage from "./components/HomePage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="education" element={<Education />} />
        <Route path="skills" element={<Skills />} />
      </Route>
    </Routes>
  </BrowserRouter>


)


}
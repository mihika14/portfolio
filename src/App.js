import React, { useState, useEffect } from "react";
import HomePage from "./components/HomePage/Homepage";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import { Home } from "@mui/icons-material";

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay for 2 seconds
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

  return (
    <>
       {isLoading ? (
        <div className="app">
          <div className="loader">
            <div className="waves"></div>
          </div> 
         </div>
      ) : (
          <div id="ui homepage">
              <button className="ui arrow" onClick={scrollToTop}>
              ↑            
              </button>
              <Navbar/>
              <HomePage/>
              <About/>
          </div>
      )
  }
    </>
  );
}


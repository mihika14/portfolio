import React, { useState, useEffect } from "react";
import HomePage from "./components/HomePage/Homepage";
import "./App.css";

export default function App() {

      const [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        // Simulate a loading delay for 2 seconds
        setTimeout(() => setIsLoading(false), 2000);
      }, []);
    
      return (
        <>
          {isLoading ? (
            <div className="loader">
              <div className="waves"></div>
            </div>
          ) : (
            <div>
              <HomePage />
            </div>
          )}
        </>
      );
    }
   
 
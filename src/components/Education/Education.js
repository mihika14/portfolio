import React from "react";
import dma from './assests/dma (2).png';
import srcasw from './assests/srcasw (2).png';
import './Education.css';

const Education = () => {
   return (
      <div className="ui Education">
         <h1 className="ui header4">EDUCATION</h1>
         <div className="ui intermediate">
            <img className="ui dma" src={dma} />
            <h3 className="ui header6">DAYAWATI MODI ACADEMY</h3>
            <h4 className="ui twelth">Intermediate</h4>
         </div>
         <br />
         <div className="ui highschool">
            <img className="ui dma" src={dma} />
            DAYAWATI MODI ACADEMY
         </div>
         <br />
         <div className="ui graduation">
            <img className="ui srcasw" src={srcasw} />
            DAYAWATI MODI ACADEMY
         </div>
      </div>
   )

};

export default Education;
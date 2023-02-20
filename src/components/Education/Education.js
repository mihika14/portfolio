import React from "react";
import dma from './assests/dma (2).png';
import srcasw from './assests/srcasw (2).png';
import './Education.css';

const Education = () => {
   return (
      <div className="ui Education">
         <h1 className="ui header4">EDUCATION</h1>
         <div className="ui graduation">
            <div className="ui internally celled grid">
               <div className="row">
                  <div className="two wide column">
                     <img className="ui srcasw" src={srcasw} />
                  </div>
                  <div className="nine wide column">
                     <h3 className="ui header6">Shaheed Rajguru College of Applied Sciences for Women</h3>
                     <h4 className="ui course">Bachelor of Science(Hons.) Electronics</h4>
                     <div className="ui year">2020-present | Delhi,India</div>
                  </div>
               </div>
            </div>
         </div>
         <div className="ui intermediate">
            <div className="ui internally celled grid">
               <div className="row">
                  <div className="two wide column">
                     <img className="ui dma" src={dma} />
                  </div>
                  <div className="nine wide column">
                     <h3 className="ui header6">Dayawati Modi Academy</h3>
                     <h4 className="ui course">Intermediate | Science</h4>
                     <div className="ui year">2019-2020 | CBSE | Rampur,India</div>
                  </div>
               </div>
            </div>
         </div>
         <div className="ui highschool">
            <div className="ui internally celled grid">
               <div className="row">
                  <div className="two wide column">
                     <img className="ui dma" src={dma} />
                  </div>
                  <div className="nine wide column">
                     <h3 className="ui header6">Dayawati Modi Academy</h3>
                     <h4 className="ui course">High School</h4>
                     <div className="ui year">2017-2018 | CBSE | Rampur,India</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
};
export default Education;






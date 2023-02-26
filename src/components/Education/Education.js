import React from "react";
import dma from './assests/dma (2).png';
import srcasw from './assests/srcasw (2).png';
import './Education.css';

const Education = () => {
   return (
      <div id="ui Education">
         <h1 className="ui header4">EDUCATION</h1>
      <div className="ui grad">
         <div className="ui graduation">
            <div className="ui internally celled grid">
               <div className="row">
                  <div className="three wide column">
                     <img className="ui srcasw" src={srcasw} />
                  </div>
                  <div className="ten wide row">
                     <h3 className="ui header6">SRCASW , DU</h3>
                     <h4 className="ui course">BSc(H) Electronics</h4>
                     <div className="ui year">2020-present | Delhi</div>
                  </div>
               </div>
            </div>
         </div>
         <br/>
         <div className="ui intermediate">
            <div className="ui internally celled grid">
               <div className="row">
                  <div className="three wide column">
                     <img className="ui dma" src={dma} />
                  </div>
                  <div className="ten wide row">
                     <h3 className="ui header6">DMA</h3>
                     <h4 className="ui course">Intermediate</h4>
                     <div className="ui year">2019-2020 | CBSE</div>
                  </div>
               </div>
            </div>
         </div>
         <br/>
         <div className="ui highschool">
            <div className="ui internally celled grid">
               <div className="row">
                  <div className="three wide column">
                     <img className="ui dma" src={dma} />
                  </div>
                  <div className="ten wide row">
                     <h3 className="ui header6">DMA</h3>
                     <h4 className="ui course">High School</h4>
                     <div className="ui year">2017-2018 | CBSE</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </div>
   )
};
export default Education;






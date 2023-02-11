import React from "react";
import { Card } from "semantic-ui-react";
import js from './assests/java.png';
import cpp from './assests/c++.png';
import python from './assests/python.png';
import react from './assests/reacr.png';
import css from './assests/css.png';
import html from './assests/html.png';
import C from './assests/C.png';
import semanticui from './assests/semanticui.png';
import matlab from './assests/matlab.png';
import './Cards.css';

const description1 = 
<a href ="https://github.com/mihika14" target= '_/blank'>View Projects </a>

const description2 = 
<a href="https://coddy.tech/profile" target= '_/blank'>Coding Profile</a>

const SkillCard = () => (
    <Card.Group>
    <Card
      image={js}
      description={description1}
    />
    <Card
      image={cpp}
      description={description2}
    />
     <Card
      image={react}
      description={description1}
    />
     <Card
      image={html}
      description={description1}
    />
     <Card
      image={python}
      description="PYTHON"
    />
     <Card
      image={css}
      description={description1}
    />
    <Card
      image={C}
      description="C"
    />
     <Card
      image={matlab}
      description="MATLAB"
    />
     <Card
      image={semanticui}
      description="Semantic-UI"
    />
    </Card.Group>
    
  )
  
  export default SkillCard;
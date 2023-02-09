import React from "react";
import { Card } from "semantic-ui-react";
import js from './assests/java.png';
import c from './assests/c++.png';
import python from './assests/python.png';
import reacr from './assests/reacr.png';
import css from './assests/css.png';
import html from './assests/html.png';

const SkillCard = () => (
    <Card.Group>
    <Card
      image={js}
      header='VIEW PROJECTS'
    />
    <Card
      image={c}
      header='VIEW PROJECTS'
    />
     <Card
      image={reacr}
      header='VIEW PROJECTS'
    />
     <Card
      image={html}
      header='VIEW PROJECTS'
    />
     <Card
      image={python}
      header='VIEW PROJECTS'
    />
     <Card
      image={css}
      header='VIEW PROJECTS'
    />
    </Card.Group>
    
  )
  
  export default SkillCard;
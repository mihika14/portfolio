import React from "react";
import { Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
   state = {}
 
   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
 
   render() {
     const { activeItem } = this.state
 
     return (
       <Menu>
        
         <Menu.Item
           as={ Link } to='skills'
           name='skills'
           active={activeItem === 'skills'}
           onClick={this.handleItemClick}
         >     
         </Menu.Item>
 
         <Menu.Item
           as={ Link } to='about'
           name='about'
           active={activeItem === 'about'}
           onClick={this.handleItemClick}
         > About
         </Menu.Item>
 
         <Menu.Item
           as={ Link } to='education'
           name='Education'
           active={activeItem === 'Education'}
           onClick={this.handleItemClick}
         >
          Education
         </Menu.Item>
       </Menu>
     )
   }
 }
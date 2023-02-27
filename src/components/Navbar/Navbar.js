import React, { Component } from 'react'
import { Menu,Icon } from 'semantic-ui-react'
import './Navbar.css';

export default class Navbar extends Component  {
  state = { activeItem: 'ABOUT' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  

  render() {
    const { activeItem } = this.state

    return (
      <div className='ui navbar'>
      <Menu secondary icon='labeled'>
        <Menu.Item
          name='ABOUT'
          active={activeItem === 'ABOUT'}
          onClick={this.handleItemClick}
          href="/about"
        >
        <Icon name='home' size='huge' />
        </Menu.Item>
        <Menu.Item
          name='SKILLS'
          active={activeItem === 'SKILLS'}
          onClick={this.handleItemClick}
          href="#ui Skills"
        >
        <Icon name='cog'/>
        </Menu.Item>
        <Menu.Item
          name='EDUCATION'
          active={activeItem === 'EDUCATION'}
          onClick={this.handleItemClick}
          href="#ui Education"
        >
        <Icon name='graduation cap' />
        </Menu.Item>
        <Menu.Item
          name='EXPERIENCE'
          active={activeItem === 'EXPERIENCE'}
          onClick={this.handleItemClick}
          href="#ui Experience"
        >
        <Icon name='suitcase' />
        </Menu.Item>
      </Menu>
      </div>
    )
  }
}
import React, { Component } from 'react'
import { Menu,Icon } from 'semantic-ui-react'
import './Navbar.css';

export default class Navbar extends Component  {
  state = { activeItem: 'ABOUT' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className='navbar'>
      <Menu secondary icon='labeled'>
        <Menu.Item
          name='ABOUT'
          active={activeItem === 'ABOUT'}
          onClick={this.handleItemClick}
        >
        <Icon name='home' />
        </Menu.Item>
        <Menu.Item
          name='SKILLS'
          active={activeItem === 'SKILLS'}
          onClick={this.handleItemClick}
        >
        <Icon name='cog' />
        </Menu.Item>
        <Menu.Item
          name='CONTACT ME'
          active={activeItem === 'CONTACT ME'}
          onClick={this.handleItemClick}
        >
        <Icon name='phone' />
        </Menu.Item>
        <Menu.Item
          name='EDUCATION'
          active={activeItem === 'EDUCATION'}
          onClick={this.handleItemClick}
        >
        <Icon name='graduation cap' />
        </Menu.Item>
      </Menu>
      </div>
    )
  }
}
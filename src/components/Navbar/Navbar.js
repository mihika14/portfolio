import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './Navbar.css';

export default class Navbar extends Component  {
  state = { activeItem: 'ABOUT' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className='navbar'>
      <Menu pointing secondary vertical>
      {/* <Menu.Item
          name='MS'
        /> */}
        <Menu.Item
          name='ABOUT'
          active={activeItem === 'ABOUT'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='SKILLS'
          active={activeItem === 'SKILLS'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='CONTACT ME'
          active={activeItem === 'CONTACT ME'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='EDUCATION'
          active={activeItem === 'EDUCATION'}
          onClick={this.handleItemClick}
        />
      </Menu>
      </div>
    )
  }
}
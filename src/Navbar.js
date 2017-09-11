import React, { Component } from 'react';
import {Button, Icon, Container, Header, Menu, Image} from 'semantic-ui-react';

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <div className="Navbar">
        <Menu>
          <Menu.Item header name='home' onClick={this.handleItemClick}>
            <Image src="http://www.mendonleasing.com/images/logo.png" size="small"/>
          </Menu.Item>
          <Menu.Item name='vehicles' active={activeItem === 'vehicles'} onClick={this.handleItemClick} />
          <Menu.Item name='locations' active={activeItem === 'locations'} onClick={this.handleItemClick} />
          <Menu.Item name='contact us' active={activeItem === 'contactUs'} onClick={this.handleItemClick} />
        </Menu>
      </div>
    )
  }
}

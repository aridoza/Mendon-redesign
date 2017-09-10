import React, { Component } from 'react';
import {Button, Icon, Container, Header, Menu, Image} from 'semantic-ui-react';
let Vehicles = require('./vehicles.json');

export default class App extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <div className="App">
      <Menu>
        <Menu.Item header>
          <Image src="http://www.mendonleasing.com/images/logo.png" size="small"/>
        </Menu.Item>
        <Menu.Item name='hello' active={activeItem === 'aboutUs'} onClick={this.handleItemClick} />
        <Menu.Item name='jobs' active={activeItem === 'jobs'} onClick={this.handleItemClick} />
        <Menu.Item name='locations' active={activeItem === 'locations'} onClick={this.handleItemClick} />
      </Menu>
      <Container fluid>
        <Header as='h2'>Dogs Roles with Humans</Header>
        <p>Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today.</p>
        <p>The dogs' value to early human hunter-gatherers led to them quickly becoming ubiquitous across world cultures. Dogs perform many roles for people, such as hunting, herding, pulling loads, protection, assisting police and military, companionship, and, more recently, aiding handicapped individuals. This impact on human society has given them the nickname "man's best friend" in the Western world. In some cultures, however, dogs are also a source of meat</p>
      </Container>
        <Button icon>
        <Icon name="world" />
          Click Here!
        </Button>
        <Button secondary>Secondary</Button>
      </div>
    );
  }
}

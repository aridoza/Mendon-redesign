import React, { Component } from 'react';
import {Divider} from 'semantic-ui-react';

import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

let Vehicles = require('./vehicles.json');

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Divider />
        <Home />
        <Footer />
      </div>
    );
  }
}

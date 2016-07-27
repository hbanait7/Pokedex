'use strict';

import React, { Component } from 'react';
import Header from './header/header.js';
import Jumbotron from './jumbotron/jumbotron.js';


class App extends Component {

 
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        {this.props.children}
      </div>
    );
  }
}

export default App;

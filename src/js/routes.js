'use strict';
import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// import components
import App from './components/app.js';

class PokedexRouter extends Component {
  render() {
    return (
      <Router history={ hashHistory } >
        <Route path='/' component={App} >

        </Route>
      </Router>
    );
  }
}

export default PokedexRouter

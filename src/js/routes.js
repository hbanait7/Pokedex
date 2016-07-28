'use strict';

import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// import components
import App from './components/app.js';
import PokeShow from './components/pokeGrid/pokeShow.js';
import PokeGrid from './components/pokeGrid/pokeGrid.js';

class PokedexRouter extends Component {

  render() {
    return (
      <Router history={ hashHistory } >
        <Route path='/' component={App} >
          <IndexRoute component={PokeGrid} />
          <Route path='show/:imageId' component={PokeShow} />
          <Route path='pokemon/:type' component={PokeGrid} />
        </Route>
      </Router>
    );
  }
}

export default PokedexRouter


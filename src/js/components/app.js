'use strict';

import React, { Component } from 'react';
import Header from './header/header.js';
import Jumbotron from './jumbotron/jumbotron.js';
import PokeApi from '../api/api.js';
import PokeGrid from './pokeGrid/pokeGrid.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokeList: []
    };
  }

  componentWillMount() {
    PokeApi.allPokemons().then(function(data) {
      this.setState({
        pokeList: data.pokemon_entries
      })
      console.log(data.pokemon_entries);
    }.bind(this));
  }

  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <PokeGrid pokeList={this.state.pokeList} />
      </div>
    );
  }
}

export default App;

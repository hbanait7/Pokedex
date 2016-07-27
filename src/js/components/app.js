'use strict';

import React, { Component } from 'react';
import Header from './header/header.js';
import PokeApi from '../api/api.js';
import PokeGrid from './pokeGrid/pokeGrid.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokeList: null,
      name: '',
      image: '',
      number: '',
      type: ''
    };
  }

  componentWillMount() {
    PokeApi.allPokemons().then(function(data) {
      this.setState({
        pokeList: data.pokemon_entries
      })
    }.bind(this));
  }

  render() {
    return (
      <div>
        <Header />
        <PokeGrid pokeList={this.state.pokeList} />
      </div>
    );
  }
}

export default App;

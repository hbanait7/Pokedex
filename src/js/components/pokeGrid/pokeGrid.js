'use strict';

import React, { Component } from 'react';
import PokeContainer from './pokeContainer.js';
import PokeApi from '../../api/api.js';

class PokeGrid extends Component {
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
      <div className="container">
        <PokeContainer pokeList={this.state.pokeList} />
      </div>
    );
  }
}

export default PokeGrid
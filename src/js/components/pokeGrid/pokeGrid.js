 'use strict';

import React, { PropTypes, Component } from 'react';
import PokeContainer from './pokeContainer.js';
import Jumbotron from '../jumbotron/jumbotron';

class PokeGrid extends Component {
  
  render() {
    return (
      <div>
        <Jumbotron />
        <PokeContainer pokeList={this.context.pokeList} />
      </div>
    );
  }
}

PokeGrid.contextTypes = {
  pokeList : PropTypes.array.isRequired
};

export default PokeGrid
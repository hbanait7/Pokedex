'use strict';

import React, { Component } from 'react';
import PokeContainer from './pokeContainer.js';

class PokeGrid extends Component {
  render() {
    return (
      <div className="container">
        <PokeContainer pokeList={this.props.pokeList} />
      </div>
    );
  }
}

export default PokeGrid
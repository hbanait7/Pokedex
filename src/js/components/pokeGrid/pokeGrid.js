'use strict';

import React, { PropTypes, Component } from 'react';
import PokeContainer from './pokeContainer.js';


class PokeGrid extends Component {
   
   constructor(props) {
    super(props);
   
  }



  render() {
    return (
      <div className="container">
        <PokeContainer pokeList={this.context.pokeList} />
      </div>
    );
  }
}

PokeGrid.contextTypes = {
  pokeList : PropTypes.array.isRequired
};

export default PokeGrid
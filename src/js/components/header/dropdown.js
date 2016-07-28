'use strict';

import React, { Component } from 'react';
import PokeApi from '../../api/api.js';

class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: ''
    };
  }

  onClick(type) {
    type.preventDefault();
    let query = type.target.text;
    console.log(query);
    console.log(typeof query);
    PokeApi.pokemonType(query).then(function(data) {
      console.log(data);
    }.bind(this));
  }

  render() {

    var types = ['normal', 'fire', 'water', 'electric', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon'];

    var list = types.map((type, index) => {
      return (
        <li key={index} onClick={this.onClick.bind(this)}>
          <a href="#">{type}</a>
        </li>
      )
    })

    return (
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Organize By Type <span className="caret"></span></a>
            <ul className="dropdown-menu">
              {list}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Dropdown
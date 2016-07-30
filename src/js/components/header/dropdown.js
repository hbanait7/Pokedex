'use strict';

import React, { PropTypes, Component } from 'react';
import PokeApi from '../../api/api.js';

class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: ''
    };
  }

  

// http://stackoverflow.com/questions/29510301/pass-reference-of-a-component-to-another-one-in-reactjs

  render() {

    var types = ['normal', 'fire', 'water', 'electric', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon'];

    var list = types.map((type, index) => {
      return (
        <li key={index} onClick={this.context.onDropdownItemClick.bind(this)}>
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

Dropdown.contextTypes = {
  onDropdownItemClick : PropTypes.func.isRequired
};

export default Dropdown
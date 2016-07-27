'use strict';

import React, { Component } from 'react';
import PokeApi from '../../api/api.js';

class SearchBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      pokemon: ''
    };
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  onClick() {
    var text = this.state.text;
    
    PokeApi.getPokemon(text).then(function(data) {
      
    }.bind(this));

  }

  render() {

    return (
      <form className="navbar-form navbar-left" role="search">
        <div className="form-group">
          <div className="row">
            <input type="text" className="form-control" onChange={this.onChange.bind(this)} value={this.state.text} placeholder="Enter Pokemon Name" />
            <button type="submit" onClick={this.onClick.bind(this)} className="btn btn-default">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar
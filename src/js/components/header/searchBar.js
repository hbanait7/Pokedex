'use strict';

import React, { Component, PropTypes } from 'react';
import PokeApi from '../../api/api.js';

class SearchBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  render() {

    return (
      <form className="navbar-form navbar-left" role="search">
        <div className="form-group">
          <div className="row">
            <input type="text" className="form-control" onChange={this.onChange.bind(this)} value={this.state.text} placeholder="Enter Pokemon Name" />
            <button type="submit" onClick={this.context.onSearchButtonClick.bind(this, this.state.text)} className="btn btn-default">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

SearchBar.contextTypes = {
  onSearchButtonClick: PropTypes.func.isRequired
};

export default SearchBar
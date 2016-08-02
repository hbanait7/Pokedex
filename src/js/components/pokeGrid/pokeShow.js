'use strict';

import React, { Component } from 'react';
import PokeApi from '../../api/api.js';

class PokeShow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:   '',
      weight: '',
      height: '',
      id:     '',
      stats:  [],
      types:  []
    };
  }

  componentDidMount() {
    var query = this.props.params.imageId;
    PokeApi.showPokemon(query).then(function(data) {
      console.log(data);
      this.setState({
        name:   data.name,
        weight: data.weight,
        height: data.height,
        id:     data.id,
        stats:  data.stats,
        types:  data.types        
      });
    }.bind(this));
  }

  capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  render() {

    if (this.state.id !== '') {
      var imageUrl = `https://s3-eu-west-1.amazonaws.com/calpaterson-pokemon/${this.state.id}.jpeg`;
    }

    return (
      <div className="media">
        <div className="media-left media-top">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{this.capitalize(this.state.name)}</h4>
          
        </div>
      </div>
    );
  }
}

export default PokeShow
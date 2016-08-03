'use strict';

import React, { Component } from 'react';
import PokeApi from '../../api/api.js';
import BarChart from './barChart.js';

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

  componentWillMount() {
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

    if (this.state.id !== '' && this.state.weight !== '' && this.state.weight !== '') {
      var imageUrl = `https://s3-eu-west-1.amazonaws.com/calpaterson-pokemon/${this.state.id}.jpeg`;
      var pokeNumber = `Pokemon #: ${this.state.id}`
      var pokeWeight = `Weight: ${this.state.weight} lbs.`
      var pokeHeight =  `Height: ${this.state.height} inches`
    }

    var ulStyle = {
      WebkitPaddingStart: '0px'
    };

    var listStyle = {
      listStyle: 'none',
      marginRight: '10px'
    };

    var pokeTypes = this.state.types !== []
    ? 
      <ul style={ulStyle}> {
        this.state.types.map((type, index) => {
          return (
            <button className="panel panel-primary" style={listStyle} key={index}>{this.capitalize(type.type.name)}</button>
          );
        })
      } </ul>
    : ''
    ;       

    console.log(this.state.types);

    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="media">
            <div className="media-left media-top">
              <img className="media-object" src={imageUrl}/>
            </div>
            <div className="media-body">
              <h1 className="media-heading">{this.capitalize(this.state.name)}</h1>
              <h4 className="media-heading">{pokeNumber}</h4>
              <h4 className="media-heading">{pokeWeight}</h4>
              <h4 className="media-heading">{pokeHeight}</h4>
              <h4 className="media-heading">{pokeTypes}</h4>
            </div>
            <BarChart stats={this.state.stats} />
          </div>
        </div>
      </div>
    );
  }
}

export default PokeShow
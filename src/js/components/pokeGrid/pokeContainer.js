'use strict';

import React, { Component } from 'react';

class PokeContainer extends Component {

  render() {

    var imgStyle = {
      width: '150px',
      height: '120px'
    };

    return (
      <div className="row">
        {this.props.pokeList.map((pokemon, index) => {
          return (
            <div key={index} className="col-xs-6 col-md-2">
                <a href="#" className="thumbnail">
                <img src={`https://s3-eu-west-1.amazonaws.com/calpaterson-pokemon/${index + 1}.jpeg`} style={imgStyle} />
                <p>{pokemon.entry_number}</p>
                <p>{pokemon.pokemon_species.name}</p>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PokeContainer
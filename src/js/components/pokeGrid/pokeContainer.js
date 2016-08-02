'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class PokeContainer extends Component {

  capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  render() {

    var imgStyle = {
      width: '150px',
      height: '120px',
      marginBottom: '10px'
    };

    var textStyle = {
      textAlign: 'center',
      fontSize: '20px'
    };

    var aTagStyle = {
      textDecoration: 'none'
    };

    return (
      <div className="row">
        {this.props.pokeList.map((pokemon, index) => {
          return (
            <div key={index} className="col-xs-6 col-md-2">
              <Link style={aTagStyle} to={'show/' + pokemon.entry_number} className="thumbnail">
                <img src={pokemon.imgUrl} style={imgStyle} />
                <p style={textStyle}>{pokemon.entry_number}</p>
                <p style={textStyle}>{this.capitalize(pokemon.pokemon_species.name)}</p>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PokeContainer
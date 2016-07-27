'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class PokeContainer extends Component {

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
              <Link style={aTagStyle} to={ `show/${index + 1}` } className="thumbnail">
                <img src={`https://s3-eu-west-1.amazonaws.com/calpaterson-pokemon/${index + 1}.jpeg`} style={imgStyle} />
                <p style={textStyle}>{pokemon.entry_number}</p>
                <p style={textStyle}>{pokemon.pokemon_species.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PokeContainer
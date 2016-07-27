'use strict';

import React, { Component } from 'react';
import Pokedex from 'pokedex-promise-v2';

var P = new Pokedex();

var PokeApi = {
  
  getPokemon: function(query) {
    return P.getPokemonByName(query)
    .then(function(response) {
        return response;
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
  },

  allPokemons: function() {
    return P.getPokedexByName("kanto")
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
  }

}

export default PokeApi
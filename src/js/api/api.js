'use strict';

import React, { Component } from 'react';
import Pokedex from 'pokedex-promise-v2';
import 'whatwg-fetch';

const apiUrl = 'http://pokeapi.co/api/v2/pokemon/';

var P = new Pokedex();

var PokeApi = {
  
  searchPokemon: function(query) {
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
  },

  pokemonType: function(query) {
    return P.getTypeByName(query)
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
  },

  showPokemon: function(query) {
    return fetch(apiUrl + query).then(function(response) {
      return response.json();
    });
  }

}

export default PokeApi
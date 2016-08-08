'use strict';

import React, { PropTypes, Component } from 'react';
import Header from './header/header.js';
import Jumbotron from './jumbotron/jumbotron.js';
import PokeApi from '../api/api.js';
class App extends Component {
  
  constructor(props){
    super(props);
     this.state = {
      pokeList: [],
      subList: [],
      pokemon: ''
    };
    this.pokemonHashMap = new Map();
  }
  
  getChildContext(){
    return {
      pokeList: this.state.subList,
      onDropdownItemClick: this.onDropdownItemClick.bind(this),
      onSearchButtonClick: this.onSearchButtonClick.bind(this)
    }
  }

  onSearchButtonClick(text) {
    this.setState({
      pokemon: text
    });
    console.log(this.state.pokemon);
  }

  onDropdownItemClick(type) {
    type.preventDefault();
    this.context.router.push('/pokemon/'+type.target.text);
    let query = type.target.text;
    PokeApi.pokemonType(query).then(function(data) {
      
      this.setState({
        subList: data.pokemon.filter(function(pokemon){
          return typeof this.pokemonHashMap.get(pokemon.pokemon.name) !== "undefined";
        }.bind(this)).map(function(pokemon){
            return this.state.pokeList[this.pokemonHashMap.get(pokemon.pokemon.name)];
        }.bind(this))
      });

    }.bind(this));
  }

   componentWillMount() {
    PokeApi.allPokemons().then(function(data) {
      data.pokemon_entries.forEach(function(pokemon,index){
        this.pokemonHashMap.set(pokemon.pokemon_species.name,index); 
      }.bind(this));     
      var pokemonList = data.pokemon_entries.map(function(pokemon,index){
        pokemon.imgUrl = `https://s3-eu-west-1.amazonaws.com/calpaterson-pokemon/${index + 1}.jpeg`;
        return pokemon;
      });
      this.setState({
        pokeList: pokemonList,
        subList : pokemonList
      });
    }.bind(this));
  }
  
  render() {

    var headerStyle = {
      marginBottom: '20px'
    };

    return (
      <div className='container'>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.childContextTypes = {
  pokeList: PropTypes.array,
  onDropdownItemClick: PropTypes.func,
  onSearchButtonClick: PropTypes.func,
 
};

App.contextTypes = {
  router: PropTypes.object.isRequired
};

export default App;

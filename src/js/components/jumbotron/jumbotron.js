import React, { Component } from 'react';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container"> 
        <h1>Welcome To Pokedex!</h1>
        <p>This is an index of all 151 Pokemon from the original series. Search or organize Pokemon by type using
        the tools above or click on a Pokemon below for more info!</p>
        </div>
      </div>
    );
  }
}

export default Jumbotron
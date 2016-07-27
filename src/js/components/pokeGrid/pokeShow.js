'use strict';

import React, { Component } from 'react';

class PokeShow extends Component {

  render() {

    const ShowPage = ({ params }) => ( // extract the params from the props
      <img src={`https://s3-eu-west-1.amazonaws.com/calpaterson-pokemon/${ params.imageId }.jpeg`} /> // use params.imageId to get the original index of the image
    );

    return (
      <p>ShowPage</p>
    );
  }
}

export default PokeShow
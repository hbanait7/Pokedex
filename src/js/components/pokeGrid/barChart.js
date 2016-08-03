'use strict';

import React, { Component } from 'react';

var Chart = require("react-chartjs").Bar;

class BarChart extends Component {


  render() {
  console.log(this.props.stats);
    return (
      <Chart stats={this.props.stats} width="600" height="250" redraw />
    );
  }   

}

export default BarChart;

// Have to take the data from this.props.stats and put it into a const data
// https://www.npmjs.com/package/react-bar-chart

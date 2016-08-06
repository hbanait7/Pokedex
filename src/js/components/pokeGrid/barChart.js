'use strict';

import React, { Component } from 'react';

var Chart = require("react-chartjs").Bar;

class BarChart extends Component {

  capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }


  render() {
  
    var pokeLabels = this.props.stats.map((label) => {
      return this.capitalize(label.stat.name)
    })

    var pokeDataSet = this.props.stats.map((set) => {
      return set.base_stat
    })

    console.log(this.props.stats);

    var data = {
      labels: pokeLabels,
      datasets: [
        {
            label: 'Pokemon Stats',
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,          
            data: pokeDataSet
        }
      ]
    }

    return (
      <div className='row'>
        <div className='col-xs-12 col-sm-offset-3 col-xs-offset-0'>
          <Chart data={data} width="600" height="250" redraw />
        </div>
      </div>
    );
  }   

}

export default BarChart;

// Have to take the data from this.props.stats and put it into a const data
// https://www.npmjs.com/package/react-bar-chart

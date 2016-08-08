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

    var data = {
      labels: pokeLabels,
      datasets: [
        {
          fillColor: ['rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                      ],      
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



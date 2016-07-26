'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes.js';

ReactDOM.render(
  <Router history={ hashHistory } />,
  document.querySelector('#app')
);

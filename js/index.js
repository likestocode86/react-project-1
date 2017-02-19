require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Board boardTitle="Countries"
    					   lists="Asia America Africa"/>, document.getElementById('app'))
);


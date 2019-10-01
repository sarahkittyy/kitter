import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Routes from './Routes';

// Render the browserrouter component.
ReactDOM.render(<BrowserRouter>{Routes}</BrowserRouter>, document.querySelector('#root'));
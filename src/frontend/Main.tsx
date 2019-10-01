import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import Theme from './Theme';
import { MuiThemeProvider } from '@material-ui/core';

// Render the browserrouter component.
ReactDOM.render(
	<MuiThemeProvider theme={Theme}>
		<BrowserRouter>{Routes}</BrowserRouter>
	</MuiThemeProvider>, 
	
	document.querySelector('#root'));
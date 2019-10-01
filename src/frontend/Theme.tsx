import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';

export const Theme = createMuiTheme({
	palette: {
		primary: pink,
		secondary: {
			main: '#f44336',
		}
	},
	typography: {
		fontFamily: 'Roboto',
		fontSize: 16,
		fontWeightRegular: "normal"
	}
});

export default Theme;
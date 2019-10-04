import React from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import Home from './Home';
import Login from './Login';

/**
 * @brief All app routes.
 */
export default (
	<Switch>
		<Redirect exact from="/" to="/home" />
		<Route path="/home" component={Home} />
		<Route path="/login" component={Login} />
	</Switch>	
);
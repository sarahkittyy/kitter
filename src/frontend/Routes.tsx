import React from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';

/**
 * @brief All app routes.
 */
export default (
	<Switch>
		<Redirect exact from="/" to="/home" />
		<Route path="/home" component={Home} />
		<Route path="/login" component={Login} />
		<Route path="/logout" component={Logout} />
	</Switch>	
);
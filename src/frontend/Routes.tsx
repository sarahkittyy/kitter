import React from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import Home from './Home';

/**
 * @brief All app routes.
 */
export default (
	<Switch>
		<Route exact path="/" component={() => <Redirect to="/home" />} />
		<Route path="/home" component={Home} />
	</Switch>	
);
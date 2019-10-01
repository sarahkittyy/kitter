import React, {Component} from 'react';
import { Typography, Button} from '@material-ui/core';
import isAuthenticated from '../../../API/isAuthenticated';
import Auth from './Auth';
import NoAuth from './NoAuth';

export interface State
{
	authenticated: boolean;
};

export interface Props
{
	
};

/**
 * @brief Button on the top-right of the TopBar, telling us to log in or showing us our profile.
 */
export default class ProfileButton extends Component<Props, State>
{
	public constructor(props: Props)
	{
		super(props);
		
		this.state = {
			authenticated: false
		};
	}
	
	public componentDidMount()
	{
		isAuthenticated((success) => {
			this.setState({
				...this.state,
				authenticated: success
			});
		});
	}
	
	public render()
	{
		const { authenticated } = this.state;
		
		return (
		<>
			{ authenticated ? <Auth /> : <NoAuth />}
		</>
		);
	}
};
import React, {Component} from 'react';
import { Typography, Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

export interface Props
{
	
};

export interface State
{
	redirectToLogin: boolean;
};

/**
 * @brief Component displayed by ProfileButton when we aren't logged in.
 */
export default class NoAuth extends Component<Props, State>
{
	public constructor(props: Props)
	{
		super(props);
		
		this.state = {
			redirectToLogin: false
		};
	}
	
	public render()
	{
		return (
		<>
			<Button onClick={() => this.setState({...this.state, redirectToLogin: true})}>
				<Typography 
					variant="h6"
					component="p"
					style={{textTransform: 'none', width: '100%', height: '100%', color: 'white'}}>
					- login -
				</Typography>
			</Button>
			{this.state.redirectToLogin ? <Redirect to="/login"/> : ''}
		</>
		);	
	}
}
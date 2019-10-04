import React, {Component} from 'react';
import { Typography, Paper, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export interface Props
{
	
};

export interface State
{
	
};

/**
 * @brief The main login page.
 */
export default class Login extends Component<Props, State>
{	
	public constructor(props: Props)
	{
		super(props);
		
		this.state = {
			
		};
	}
	
	public render()
	{
		return (
		<>
			<Paper style={{padding: '30px', height:'100%', margin: 'auto', width: '30%', marginTop: '10%'}}>
				<Typography align='center' variant='h5' component='p'>
					kitter - login! {'<3'}
				</Typography>
				<TextField
			</Paper>
		</>
		);
	}
};
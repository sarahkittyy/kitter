import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { Typography, Button, Paper } from '@material-ui/core';
import logout from './API/logout';
import AlignedGrid from './Components/AlignedGrid';

export interface State
{
	loggedOut: 'in-progress' | 'success' | 'error';
	redirect: boolean;
};

/**
 * @brief Logout page.
 */
export default class Logout extends Component<{}, State>
{
	public constructor(props: React.Props<{}>)
	{
		super(props);
		
		this.state = {
			loggedOut: 'in-progress',
			redirect: false
		};
	}
	
	public componentDidMount()
	{
		logout().then((response: any) => {
			this.setState({
				...this.state,
				loggedOut: (response.success ? 'success' : 'error')
			});
		});
	}
	
	public render()
	{
		return (
		<>
			{ this.state.redirect ? <Redirect push to='/home' /> : ''}
			<Paper style={{margin: 'auto', marginTop: '10%', padding: '20px', width: '60%'}}>
				<AlignedGrid align='center'>
					{ this.state.loggedOut === 'in-progress' ? 
					
					<Typography component="p" variant="h3">
						doin a log out,,,,
					</Typography>
					: (
						this.state.	loggedOut === 'error' ?
						<Typography component="p" variant="h3">
							hi u should contact the server cat cuz we couldn't rly log u out for some reason
						</Typography>
						:
						<Typography component="p" variant="h3">
							our internal server cats have logged u out
						</Typography>
					)
					}
				</AlignedGrid>
				<AlignedGrid align='center'>
					{ this.state.loggedOut == 'success' ?
						<Button onClick={() => this.setState({...this.state, redirect: true})}
								style={{border: '1px solid #ddd', padding: '5px', margin: 'auto', marginTop: '25px'}}>
							go home
						</Button>
					: ''}
				</AlignedGrid>
			</Paper>
		</>
		);
	}
};
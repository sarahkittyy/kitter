import React, {Component} from 'react';
import { Typography, Paper, Button, TextField, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AlignedGrid from '../Components/AlignedGrid';
import login from '../API/login';
import signup from '../API/signup';
import { Redirect } from 'react-router-dom';

export interface Props
{
	
};

export interface State
{
	loggedIn: boolean;
};

const inputStyle = {
	margin: '15px'
};

/**
 * @brief The main login page.
 */
export default class Login extends Component<Props, State>
{	
	username: React.RefObject<any>;
	password: React.RefObject<any>;
	
	public constructor(props: Props)
	{
		super(props);
		
		this.state = {
			loggedIn: false
		};
		
		this.username = React.createRef();
		this.password = React.createRef();
	}
	
	public componentDidMount()
	{
		document.title = 'kitter - login';
	}
	
	private submit()
	{
		const username: string = this.username.current.value;
		const password: string = this.password.current.value;
		
		login(username, password)
		.catch((e) => alert(e))
		.then((resp: any) => {
			if(resp.success)
			{
				this.setState({...this.state, loggedIn: true});
			}
			else
			{
				alert(resp.response);
			}
		});
	}
	
	private signUp()
	{
		const username: string = this.username.current.value;
		const password: string = this.password.current.value;
		
		signup(username, password)
		.catch((e) => alert(e))
		.then((resp: any) => {
			if(resp.success)
			{
				this.submit();
			}
			else
			{
				alert(resp.response);
			}
		})
	}
	
	public render()
	{
		return (
		<>
			{this.state.loggedIn ? <Redirect push to='/home' /> : ''}
			<Paper style={{padding: '30px', height:'100%', margin: 'auto', width: '30%', marginTop: '10%'}}>
				<Typography align='center' variant='h5' component='p' style={{paddingBottom: '7px'}}>
					kitter - login! {'<3'}
				</Typography>
				<Divider />
				<br />
				<AlignedGrid align='center'>
					<TextField onKeyPress={(ev) => {if (ev.key == 'Enter') {this.password.current.focus();}}} inputRef={this.username} style={inputStyle} id='standard-name' variant='outlined' label='username'>
						
					</TextField>
				</AlignedGrid>
				<AlignedGrid align='center'>
					<TextField onKeyPress={(ev) => {if (ev.key == 'Enter') {this.submit();}}} inputRef={this.password} style={inputStyle} placeholder='Password' type='password' id='standard-password-input' variant='outlined' label='password'>
						
					</TextField>
				</AlignedGrid>
				<AlignedGrid align='center'>
					<Button onClick={() => this.submit()} style={{border: '1px solid #ddd', borderRadius: '4', padding: '4px', margin: '8px'}}>
						log in
					</Button>
					<Button onClick={() => this.signUp()} style={{border: '1px solid #ddd', borderRadius: '4', padding: '4px', margin: '8px'}}>
						sign up
					</Button>
				</AlignedGrid>
			</Paper>
		</>
		);
	}
};
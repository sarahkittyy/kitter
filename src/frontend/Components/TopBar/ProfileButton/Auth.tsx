import React from 'react';
import {IconButton, MenuList, Menu, MenuItem, Typography} from '@material-ui/core';
import logout from '../../../API/logout';

export interface Props
{
	
};

export interface State
{
	menuOpen: boolean;
	menuButton?: HTMLButtonElement;
};

/**
 * @brief Component that displays when the ProfileButton detectes we are logged in and authorized.
 */
export default class Auth extends React.Component<Props, State>
{
	public constructor(props: Props)
	{
		super(props);
		
		this.state = {
			menuOpen: false
		};
	}
	
	private setMenu(open: boolean)
	{
		this.setState({
			...this.state,
			menuOpen: open
		});
	}
	
	private click(menuOption: 'profile' | 'logout')
	{
		switch(menuOption)
		{
			case 'profile':
				break;
			
			case 'logout':
				logout()
				.then(() => {
					window.location.reload();
				});
				break;
				
			default:
				break;
		}
	}
	
	private setAnchor(event: React.MouseEvent<HTMLButtonElement>)
	{
		this.setState({
			...this.state,
			menuButton: event.currentTarget
		});
	}
	
	public render()
	{
		return (
		<>
			<IconButton onClick={(e) => {this.setAnchor(e); this.setMenu(true)}}>
				<Typography variant="h6"
							component="p"
							style={{textTransform: 'none', width: '100%', height: '100%', color: 'white'}}>
					profile
				</Typography>
			</IconButton>
			<Menu
				id="profile-menu"
				keepMounted
				anchorEl={this.state.menuButton}
				open={this.state.menuOpen}
				onClose={() => this.setMenu(false)}>
						
				<MenuItem onClick={() => {this.setMenu(false); this.click('profile'); }}>test</MenuItem>
				<MenuItem onClick={() => {this.setMenu(false); this.click('logout'); }}>logout</MenuItem>
					
			</Menu>
		</>
		);
	}
}

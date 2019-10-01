import React, {Component} from 'react';
import { Grid, Typography, Toolbar, AppBar, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import AlignedGrid from './AlignedGrid';
import motd from '../Util/motd';

export default class TopBar extends Component<{}, {}>
{
	public constructor(props: React.Props<{}>)
	{
		super(props);
	}
	
	/**
	 * @brief Toggles the drawer on the given screen edge.
	 */
	private toggleDrawer(dir: 'left')
	{
	}
	
	public render()
	{
		return (
			<AppBar>
				<Toolbar>
					<AlignedGrid align="left">
						<IconButton onClick={() => this.toggleDrawer('left')}>
							<MenuIcon style={{color: 'white'}}/>
						</IconButton>
					</AlignedGrid>
					<AlignedGrid align="center">
						<Typography variant="h5">
							🐈 kitter - {motd()} 🐈
						</Typography>
					</AlignedGrid>
					<AlignedGrid align="right">
						<Typography variant="h6">
							nyan
						</Typography>
					</AlignedGrid>
				</Toolbar>
			</AppBar>
		);
	}
}
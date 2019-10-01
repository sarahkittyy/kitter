import React, {Component} from 'react';
import { Grid, Typography, Toolbar, AppBar, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import AlignedGrid from './AlignedGrid';
import motd from '../Util/motd';

export interface TopBarProps
{
	toggleDrawer: (side: 'left' | 'top' | 'right' | 'bottom', open?: boolean) => void;
};

export default class TopBar extends Component<TopBarProps, {}>
{
	public constructor(props: TopBarProps)
	{
		super(props);
	}
	
	public render()
	{
		const { toggleDrawer } = this.props;
		return (
			<AppBar>
				<Toolbar>
					<AlignedGrid align="left">
						<IconButton onClick={() => toggleDrawer('left')}>
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
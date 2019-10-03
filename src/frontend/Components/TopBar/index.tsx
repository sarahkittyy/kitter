import React, {Component} from 'react';
import { Grid, Typography, Toolbar, AppBar, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import AlignedGrid from '../AlignedGrid';
import motd from '../../Util/motd';
import ProfileButton from './ProfileButton';

export interface Props
{
	toggleDrawer: (side: 'left' | 'top' | 'right' | 'bottom', open?: boolean) => void;
};

export interface State
{
	motd: string;	
};

/**
 * @brief The main upper bar atop the screen.
 */
export default class TopBar extends Component<Props, State>
{
	public constructor(props: Props)
	{
		super(props);
		
		this.state = {
			motd: motd()
		};
	}
	
	public render()
	{
		const { toggleDrawer } = this.props;
		const { motd } = this.state;
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
							🐈 kitter - {motd} 🐈
						</Typography>
					</AlignedGrid>
					<AlignedGrid align="right">
						<Typography variant="h6">
							<ProfileButton />
						</Typography>
					</AlignedGrid>
				</Toolbar>
			</AppBar>
		);
	}
}
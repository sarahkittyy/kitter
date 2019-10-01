import React, {Component} from 'react';
import { Grid, Typography, Toolbar, AppBar } from '@material-ui/core';
import AlignedGrid from './AlignedGrid';

export default class TopBar extends Component<{}, {}>
{
	public constructor(props: React.Props<{}>)
	{
		super(props);
	}
	
	public render()
	{
		return (
			<AppBar>
				<Toolbar>
					<AlignedGrid align="left">
						<Typography variant="h6">
							nyan desu
						</Typography>
					</AlignedGrid>
					<AlignedGrid align="center">
						<Typography variant="h6">
							nyan
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
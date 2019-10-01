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
						<Grid item>
							<Typography variant="h6">
								nyan desu
							</Typography>
						</Grid>
					</AlignedGrid>
				</Toolbar>
			</AppBar>
		);
	}
}
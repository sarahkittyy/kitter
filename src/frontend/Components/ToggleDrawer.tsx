import React, {Component} from 'react';
import { SwipeableDrawer } from '@material-ui/core';

export interface LeftDrawerProps
{
	open: boolean;
	toggleDrawer: (open: boolean) => void;
	children?: React.ReactNode;
	side: 'left' | 'top' | 'right' | 'bottom';
}

/**
 * @brief Pre-configured sw
 */
export default class ToggleDrawer extends Component<LeftDrawerProps, {}>
{
	public constructor(props: LeftDrawerProps)
	{
		super(props);
	}
	
	public render()
	{
		const { toggleDrawer, open, children, side } = this.props;
		return (
			<SwipeableDrawer 	onOpen={() => toggleDrawer(true)} 
								onClose={() => toggleDrawer(false)}
								open={open}
								anchor={side}>
				{children}
			</SwipeableDrawer>
		);
	}
};
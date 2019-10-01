import React from 'react';
import { Grid } from '@material-ui/core';
import { GridJustification } from '@material-ui/core/Grid';

type Props = {
	align: 'left' | 'center' | 'right';
	children: React.ReactNode;
};

/**
 * @brief Grid justifying content left, center or right.
 */
export const AlignedGrid = ({ align, children }: Props) => {
	let toJustification = (str: 'left' | 'center' | 'right') => {
		return ({
			left: 'flex-start',
			center: 'center',
			right: 'flex-end'
		}[str]) as GridJustification;
	};
	
	return (
		<Grid container justify={toJustification(align)} alignContent="space-around">
			{React.Children.map(children, (child) => <Grid item>{child}</Grid> )}
		</Grid>
	);
};

export default AlignedGrid;
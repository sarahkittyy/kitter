import React, {Component} from 'react';
import { Grid } from '@material-ui/core';
import { GridJustification } from '@material-ui/core/Grid';

type AlignedGridProps = {
	align: 'left' | 'center' | 'right';
	children: React.ReactNode
};

/**
 * @brief Grid justifying content left, center or right.
 */
export const AlignedGrid = ({ align, children }: AlignedGridProps) => {
	let toJustification = (str: 'left' | 'center' | 'right') => {
		return ({
			left: 'flex-start',
			center: 'center',
			right: 'flex-end'
		}[str]) as GridJustification;
	};
	return (
		<Grid container justify={toJustification(align)} alignContent="space-around">
			{children}
		</Grid>
	);
};

export default AlignedGrid;
import React from 'react';
import { Typography, Button } from '@material-ui/core';

export interface Props
{
	
};

/**
 * @brief Component displayed by ProfileButton when we aren't logged in.
 */
export default function NoAuth(props: Props): JSX.Element
{
	return (
		<Button>
			<Typography 
				variant="h6"
				component="p"
				style={{textTransform: 'none', width: '100%', height: '100%', color: 'white'}}>
				- login -
			</Typography>
		</Button>
	);
}
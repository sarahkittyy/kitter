import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Typography, Grid } from '@material-ui/core';
import { Settings as SettingsIcon } from '@material-ui/icons';

export interface OptionProps {
	icon?: JSX.Element;
	name: string;
	onClick?: () => void;
};

/**
 * @brief A single ui button to render in an option drawer.
 */
export default function Option(props: OptionProps): JSX.Element
{
	const style = makeStyles({
		button: {
			width: '100%',
			paddingTop: '15px',
			border: '0px solid white',
			textTransform: 'none',
			'&:hover': {
				border: '1px solid #ddd',
				borderRadius: '0',
				transitionDuration: '0.3s'
			}
		}
	});
	const classes = style(props);
	
	return (
		<Button onClick={props.onClick} className={classes.button} autoCapitalize='none'>
			<Grid container justify="center" spacing={1} style={{padding: '0', width: '100%'}}>
				<Grid item>
					{props.icon}	
				</Grid>
				<Grid item>
					<Typography>
						{props.name}
					</Typography>
				</Grid>
			</Grid>
		</Button>
	);
}
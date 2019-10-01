import React from 'react';
import { Container, Divider, Typography } from '@material-ui/core';
import Option from './Option';
import { Settings as SettingsIcon } from '@material-ui/icons';

export interface MainDrawerProps {
	
};

/**
 * @brief The contents of the main left-hand site drawer.
 */
export default function MainDrawer(props: MainDrawerProps): JSX.Element
{
	return (
		<Container fixed style={{paddingLeft: '0', paddingRight: '0', paddingTop: '18px'}}>
			<Typography variant="h5" style={{paddingLeft: '30px', paddingRight: '30px'}}>
				kitty menu
			</Typography>
			<Divider style={{padding: '1px', width: '100%', marginLeft: '0', marginRight: '0', marginBottom: '12%' }}/>
			<Option name="config" icon={<SettingsIcon />} />
		</Container>	
	);
}
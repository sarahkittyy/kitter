import React from 'react';

export interface Props
{
	
}

/**
 * @brief Component displayed by ProfileButton when we aren't logged in.
 */
export default function NoAuth(props: Props): JSX.Element
{
	return (
		<h6>nyo auth</h6>
	);
}
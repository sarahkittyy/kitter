import React, {Component} from 'react';

/**
 * @brief Homepage component.
 */
export default class Home extends Component<{}, {}>
{
	public constructor(props: React.Props<{}>)
	{
		super(props);
	}
	
	public componentDidMount()
	{
		document.title = "Home";
	}
	
	public render()
	{
		return (
			<h1>
				hello!
			</h1>
		);
	}
};
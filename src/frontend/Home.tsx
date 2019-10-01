import React, {Component} from 'react';
import TopBar from './Components/TopBar';

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
			<>
				<TopBar />
			</>
		);
	}
};
import React, {Component} from 'react';
import TopBar from './Components/TopBar';
import ToggleDrawer from './Components/ToggleDrawer';

export interface HomeState
{
	drawer: {
		left: boolean;
		right: boolean;
		top: boolean;
		bottom: boolean;
	}
};

/**
 * @brief Homepage component.
 */
export default class Home extends Component<{}, HomeState>
{
	public constructor(props: React.Props<{}>)
	{
		super(props);
		
		this.state = {
			drawer: {
				left: false,
				right: false,
				top: false,
				bottom: false
			}
		};
	}
	
	public componentDidMount()
	{
		document.title = "kitter";
	}
	
	public toggleDrawer(side: 'left' | 'right' | 'top' | 'bottom', open?: boolean): void {
		if(open === undefined)
		{
			this.setState({
				...this.state,
				drawer: {
					...this.state.drawer,
					[side]: !this.state.drawer[side]
				}
			});
		}
		else
		{
			this.setState({
				...this.state,
				drawer: {
					...this.state.drawer,
					[side]: open
				}
			})
		}
	}
	
	public render()
	{
		return (
			<>
				<TopBar toggleDrawer={(side, open) => this.toggleDrawer(side, open)}/>
				<ToggleDrawer side="left" toggleDrawer={(open?: boolean) => this.toggleDrawer('left', open)} open={this.state.drawer.left}>
					<h1>owo</h1>
				</ToggleDrawer>
			</>
		);
	}
};
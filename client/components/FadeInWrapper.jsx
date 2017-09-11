import React, { Component } from "react";
import { Transition } from 'react-transition-group';


const FadeInWrapper = (WrappedComponent, duration) => class Wrapper extends Component {
	constructor() {
		super()
		this.state = {
			duration: 800,
			showComponent: false
		}
	}
	
	componentDidMount() {
		this.setState({showComponent:true});
		if (duration) this.setState({duration:duration})
	}

	render() {
		const duration = this.state.duration;
		const defaultStyles = {
		  transition: `opacity ${duration}ms ease-in`,
		  opacity: 0,
		  visibility: 'hidden',
		  WebkitTransitionProperty: 'opacity',
		  WebkitTransitionDuration: `${duration}ms`
		};
		const transitionStyles = {
		  entering: { opacity: 0, visibility: 'hidden' },
		  entered:  { opacity: 1, visibility: 'visible' }
		};

		return(
			<Transition in={this.state.showComponent} timeout={duration}>
			{
				state => 
				<WrappedComponent
					{...this.props}
					state={state}
					style={{...defaultStyles, ...transitionStyles[state]}}
				/>
			}
			</Transition>
		)
	}
}

export default FadeInWrapper;

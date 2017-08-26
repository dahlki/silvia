import React, { Component } from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';
import propTypes from 'prop-types';
import StarburstContainer from './StarburstContainer';


export default class StarburstEmitter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bounds: props.starburstDiv.getBoundingClientRect()
		}
		this.nodes = new Map()
		this.burst = this.burst.bind(this)
	}

	componentDidMount() {
		this.setState({bounds:this.props.starburstDiv.getBoundingClientRect()})
		this.starbursts = this.createBursts();
		this.burst();
	}

	createBursts() {
		const bursts = [];
    let i
    for (i = 0; i < this.props.burstCount; i++) {
    	bursts.push(<StarburstContainer ref={s => this.nodes.set([`starburst${i}`], s)} key={`${i}`} bounds={this.state.bounds}/>)
    }
    return bursts;
	}
	
	burst() {
		let intervalCount = 0;
		const nodes = Array.from(this.nodes.values()).filter(node => node != null)

		const interval = setInterval(() => {
			if (intervalCount < this.props.burstCount) {
				const node = nodes[intervalCount];
				node.setPosition(this.state.bounds);
				node.playStarburst();
				intervalCount++;
			} else clearInterval(interval);
		}, this.props.burstDelay) 
	}

	render() {
		const bounds = this.state.bounds
		const emitterStyle = {
			width: bounds.width,
			height: bounds.height,
			top: bounds.top,
			left: bounds.left
		}
		return (
				<div className="starburstDiv">
					<div className="starburstEmitter" style={{emitterStyle}}>
						{ this.createBursts() }
					</div>
				</div>
		)
	}
}

StarburstEmitter.defaultProps = {
	burstCount: 10,
	burstDelay: 30,
	bounds: {
		bottom: 550,
		right: 817,
		left: 407,
		top: 450
	}
}


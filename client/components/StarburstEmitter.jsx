import React, { Component } from 'react';
import propTypes from 'prop-types';
import StarburstContainer from './StarburstContainer';


export default class StarburstEmitter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bounds: props.starburstDiv.getBoundingClientRect()
		}
		this.nodes = new Map();
		this.burst = this.burst.bind(this);
	}

	componentDidMount() {
		this.createBursts();
		this.burst();
	}

	createBursts() {
		const bursts = [];
    for (let i = 0; i < this.props.burstCount; i++) {
    	bursts.push(
    		<StarburstContainer 
    		ref={c => this.nodes.set([`starburst${i}`], c)} 
    		bounds={this.state.bounds}
    		key={`${i}`} 
    		/>)
    }
    return bursts;
	}
	
	burst() {
		let intervalCount = 0;
		const nodes = Array.from(this.nodes.values()).filter(node => node != null);

		const interval = setInterval(() => {
			if (intervalCount < this.props.burstCount) {
				const node = nodes[intervalCount];
				node.setPosition(this.state.bounds);
				node.playStarburst();
				intervalCount++;
			} else clearInterval(interval);
		}, this.props.burstDelay);
	}

	render() {
		const { bounds } = this.state;
		const emitterStyle = {
			width: bounds.width,
			height: bounds.height,
			top: bounds.top - 50,
			left: bounds.left - 50
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
	burstCount: 12,
	burstDelay: 30
}


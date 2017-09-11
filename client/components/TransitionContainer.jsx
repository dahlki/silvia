import React, { Component } from 'react';
import { TimelineMax, TweenMax } from 'gsap';
import Home from './Home';
import { default as utils } from '../utils/animationHelpers';

export default class TransitionContainer extends Component {
	constructor() {
		super()
		this.state = {
		}
		this.transitionTL = new TimelineMax();
	}

	componentDidMount() {
		const {animateTransition, setTweenTransition, removeTransition} = utils;
		const transition = this.transition;
		let { innerWidth: w, innerHeight: h } = window;	
		w = w * .5 - 75;
		h *= .9;
		setTweenTransition(transition, "transition", w, h, 1)
		this.transitionTL.add(animateTransition(transition, this.props.handleTransition, this.props.handlePageChange))
		this.transitionTL.restart();
	}

	render() {
		return(
			<div className="transitionDiv">
				<div ref={t => this.transition = t}></div>
			</div>
		)
	}
}



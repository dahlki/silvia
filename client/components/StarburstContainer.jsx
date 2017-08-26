import React, { Component } from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';
import propTypes from 'prop-types';
import { TimelineMax, TweenLite } from 'gsap';
import Starburst from './Star';
import { default as utils } from '../utils/animationHelpers';
const { random: r, randomRange: rR } = utils;


export default class StartburstContainer extends Component {
	constructor(props) {
		super(props)

		this.starburstTL = new TimelineMax({ paused:true });

		this.setPosition = this.setPosition.bind(this)
		this.playStarburst = this.playStarburst.bind(this)
	}
	
	getColor() {
		const colors = ['ffe2d6', 'D3E3FF', 'D6F3FF', 'DDF4F8', 'FFEED1', 'FFD7D1'];
		// const colors = ['B3CAF2', 'D3E3FF', 'D6F3FF', 'A4D6F9', 'D1E2FF'];
    const opacity = rR(.3, 1)

    return `#${colors[Math.floor(rR(0,6))]}`
  }

  setPosition(bounds) {
  	const ease = this.props.boundsEase;
  	if (this.starburstContainer) {
	    return TweenLite.set(this.starburstContainer, {
	      x: rR(bounds.left - ease, bounds.right + ease),
	      y: rR(bounds.top - ease, bounds.bottom + ease)
	    })
  	}
  }

  playStarburst() {
	  this.starburstTL.restart();
  }
  componentWillUnmount() {
  	this.starburstTL.kill();	
  }
  getDimensions() {
    return rR(this.props.starSizes.min, this.props.starSizes.max)
  }

	render() {
		let isMobile = !!("ontouchstart" in window)
		let stars = []
    let dimensions
    let angle
    let length
    let duration
    let color
    let opacity;
    let starCount = isMobile ? Math.floor(this.props.starCount/1.5) : this.props.starCount
    
    for (let i = 0; i < starCount; i++) {
      dimensions = this.getDimensions()
      angle = rR(0.65, 0.85) * Math.PI * 2
      length = r(1) * (this.props.bounds.height - dimensions / 2)
      duration = rR(10, 20)
      color = this.getColor()
      opacity = rR(.6, 1)

      stars.push(
      	<Starburst 
	      	key={`star${i}`} 
	      	dimensions={dimensions} 
	      	length={length} 
	      	color={color} 
	      	duration={duration} 
	      	starburstTL={this.starburstTL}
	      	opacity={opacity}
      	/>
      )
    }
		return (
			<div ref={c => this.starburstContainer = c} className="starburstContainer">
				{stars}
      </div>
		)
	}
}

StartburstContainer.defaultProps = {
	boundsEase: 30,
	starCount: 5,
  starSizes: {
    min: 8,
    max: 40
  },
  speed: 2,
}

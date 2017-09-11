import React, { Component } from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';
import propTypes from 'prop-types';
import { TimelineMax, TweenLite } from 'gsap';
import Starburst from './Star';
import helpers from '../utils/helpers';
const { isMobile, random: r, randomRange: rR } = helpers;


export default class StartburstContainer extends Component {
	constructor(props) {
		super(props)

		this.starburstTL = new TimelineMax({ paused:true });

		this.setPosition = this.setPosition.bind(this)
		this.playStarburst = this.playStarburst.bind(this)
	}
// ab9e42 c1855f d8b795 fbbab7 ffbcca ff6f8c FFEED1 dabafc 99BCCA C2296B C2AD90 E00F9E F019AC F558D1 f55883 f888de cb58f5 F65974
	getColor() {
		const colors = ['ffe2d6', 'D3E3FF', 'D6F3FF', 'DDF4F8', 'FFD7D1', 'e1c7fc', 'fbade8', 'DEE720']; 
    const opacity = rR(.4, 1)
    return `#${colors[Math.floor(rR(0,8))]}`
  }

  setPosition(bounds) {
  	let ease = this.props.boundsEase;

    if (isMobile()) ease = -ease/2.7;
    const mobileOffset = isMobile() ? 50 : 0

  	if (this.starburstContainer) {
	    return TweenLite.set(this.starburstContainer, {
	      x: rR(bounds.left - ease, bounds.right + ease) + ease + mobileOffset, 
	      y: rR(bounds.top - ease, bounds.bottom + ease) + ease/2 + mobileOffset
	    })
  	}
  }

  playStarburst() {
	  this.starburstTL.restart();
  }

  getDimensions() {
    return rR(this.props.starSizes.min, this.props.starSizes.max)
  }

  componentWillUnmount() {
  	this.starburstTL.kill();	
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
      length = r(1) * (this.props.bounds.height - dimensions / 1.8)
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
	boundsEase: 50,
	starCount: 5,
  starSizes: {
    min: 8,
    max: 40
  },
  speed: 2,
}

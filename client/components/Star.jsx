import React, { Component } from 'react';
import propTypes from 'prop-types';
import { TransitionGroup, Transition } from 'react-transition-group';
import { TimelineMax, TweenMax } from 'gsap';
import { default as utils } from '../utils/animationHelpers';
const { random: r, randomRange: rR } = utils;

export default class Starburst extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
    TweenMax.set(this.starburst, {
      backgroundColor: this.props.color,
      x: Math.cos(this.props.angle) * this.props.length + 150,
      y: Math.sin(this.props.angle) * this.props.length + 150,
      width: this.props.dimensions,
      height: this.props.dimensions,
      opacity: this.props.opacity,
      force3D: true
    })
    this.buildTimeline(this.starburst);
  }
  
  buildTimeline(node) {
  	let isMobile = !!("ontouchstart" in window)
  	const mobileOffset = isMobile ? 180 : 0
    const halfDuration = this.props.duration / 2
    const opacity = this.props.opacity
    const n = Math.round(r(1));

    if (n === 0) {
	   	this.props.starburstTL
	   		.add(TweenMax.to(node,r(5)+3,{x:r(this.props.length),y:r(this.props.length)+mobileOffset,opacity:opacity,ease:Linear.easeNone,repeat:-1, delay:-5}),
	   		TweenMax.to(node,r(5)+1,{x:`-=${rR(70,100)}`, y:`+=${rR(25,50)}`, repeat:-1,yoyo:true,opacity:opacity,ease:Power2.easeInOut}),
		    TweenMax.to(node,r(1)+0.5,{backgroundColor:"rgba(250,250,250,0)",repeat:-1,yoyo:true,ease:Sine.easeInOut}))
    } else {
    	this.props.starburstTL
	   		.add(TweenMax.to(node,r(5)+3,{x:r(this.props.length),y:r(this.props.length+mobileOffset),ease:Linear.easeNone,repeat:-1, delay:-5}),
	   		TweenMax.to(node,r(5)+1,{x:`+=${rR(70,100)}`, y:`+=${rR(40,70)}`, repeat:-1,yoyo:true,opacity:opacity,ease:Sine.easeInOut}),
		    TweenMax.to(node,r(1)+0.5,{backgroundColor:"rgba(250,250,250,.5)",repeat:-1,yoyo:true,ease:Sine.easeInOut}))
    }
  }

	render() {
		return (
			<div ref={s => this.starburst = s} className="starburst"></div>
		)
	}
}



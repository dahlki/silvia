import React, {Component} from 'react';
import { TweenLite, TweenMax, TimelineMax, TimelineLite } from 'gsap';
import { default as utils } from '../utils/animationHelpers';
const r = utils.random;
const rR = utils.randomRange;
const {animateStar, animateStaticStar, setTweenEmit, animateBurst} = utils;
let explosion


export default class Starburst extends Component {
	constructor(props) {
		super(props)
		this.state = {
			starburstContainer: this.props.animationDiv,
			mousePos: {
				x: null,
				y: null
			}
		}
	}

	componentDidMount() {
		this.setState({mousePos: this.props})
		const mouseX = this.state.mousePos.x
		const mouseY = this.state.mousePos.y
		// console.log(mouseX, mouseY);
		const pos = this.props.animationDiv.getBoundingClientRect();
		const xMin = pos.left
		const xMax = pos.right
		const yMin = pos.top
		const yMax = pos.bottom
		const w = window.innerWidth;
		const h = window.innerHeight;

		var sizeIndex = rR(0,2);
		var speed = (3 - sizeIndex)
		var xEnd = rR(xMax, xMax + 100)
		var yEnd = rR(yMax, yMax + 50)


		// const {animationDiv: starburstContainer} = this.props
		const starburstContainer = this.state.starburstContainer;
		const starburst = this.starburstRef;

		setTweenEmit(starburst, 'starburst', w,h)
	

		explosion = new TimelineMax({ repeat: -1}).call(shootDot, [starburstContainer], null, 2 );

		function shootDot(emitter) {
			let angle, length, size, bounds = emitter.getBoundingClientRect();

		  //create all the dots

		  size = rR(10, 20);
		  angle = Math.random() * Math.PI * 2; //random angle
		  //figure out the maximum distance from the center, factoring in the size of the dot (it must never go outside the circle), and then pick a random spot along that length where we'll plot the point. 
		  length = r(1) * xMax/10; 
		  //place the dot at a random spot within the emitter, and set its size.
		  TweenLite.set(starburst, {
		  	opacity:1,
		  	// transformOrigin: 50% 50% 0%,
		  	x:rR((Math.cos(angle) * length + bounds.left),(Math.cos(angle) * length + bounds.left + bounds.width / 1)),
		  	y:Math.sin(angle) * length + bounds.top + bounds.height / 2,
		  	width:size,
		  	height:size
		  });
	   	TweenMax.to(starburst, rR(2,4), {
    		opacity:1,
    		scale:rR(1, 5),
    		// physics2D:{
		    //   angle:angle * 180 / Math.PI, //translate radians to degrees
		    //   velocity:(100 + Math.random() * 250) * speed, //initial velocity
		    //   gravity:50 //you could increase/decrease this to give gravity more or less pull
    		// }
    	}, 1);
		animateBurst(this.starburstRef, w, h)
	}
		// tl.set(this.starburstRef, {left: mouseX ,top: mouseY}) 
		
		// TweenLite.to(this.starburstRef, speed, {bezier:{values: [{x: mouseX ,y: mouseY, x:xEnd, y:yEnd}]}, repeatDelay:r(1), repeat:5}, r(2))
	}

	componentWillUnmount() {
		console.log('unmount');
		explosion.kill();
	}

	render () {
		return (
				<div ref={c => this.starburstRef = c} className="starburst"></div>
		)
	}
}
			/*<div ref={c => this.starburstContainerRef = c} className="starburstContainer">
			</div>*/

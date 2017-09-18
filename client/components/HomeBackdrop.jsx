import React, { Component } from 'react';
import { TimelineMax, TweenMax } from 'gsap';
import PlanetSVG from '../../public/assets/planetSVG1';
import RadialSVG from '../../public/assets/radialBlur2';
import Halo from '../../public/assets/halo1';
import helpers from '../utils/helpers';
import { default as utils } from '../utils/animationHelpers'


export default class Home extends Component {
	constructor(props) {
		super(props)
	}

	getColor() {
		const rR = helpers.randomRange
		const colors = ['ffe2d6', 'D3E3FF', 'D6F3FF', 'FFD7D1', 'e1c7fc', 'fbade8', 'DEE720', 'FE8787', '3DF794', 'FFFFFF', 'FFFFFF']; 
    return `#${colors[Math.floor(rR(0, 11))]}`
  }

	componentDidMount() {	
		const { animateStaticStar } = utils;
		const { isMobile, random: r, randomRange: rR } = helpers;
		const stars = Array.from(this.backdropStars.children);
		const planets = Array.from(this.backdropPlanets.children);

		stars.forEach(star => {
			TweenMax.to(star, .1, {opacity:rR(.2, 1), backgroundColor:this.getColor()})
			TweenMax.to(star, 2.5, {scale:rR(1, 5), x:rR(-window.innerWidth/2, window.innerWidth/2), y:r(window.innerHeight) * .95})
			if (!isMobile()) animateStaticStar(star, 2.5, rR(1, 2.5)) // (el, userScale, userDelay)
			else animateStaticStar(star, 1.5, rR(1, 2.5))
		})

		planets.forEach(planet => {
			let scale;
			if(!isMobile()) scale = rR(1, 3)
			else scale = rR(.5, 1)
			TweenMax.to(planet, .1, {opacity:rR(.5, 1)})
			TweenMax.to(planet, 1.8, {scale:scale, x:rR(-window.innerWidth/2, 0), y:r(window.innerHeight * .4)})
		})

		// TweenMax.to(this.halo, .1, {opacity:rR(.5, 1)})
		// TweenMax.to(this.halo, 1.8, {scale:rR(.8, 1.2), x:rR(0, window.innerWidth/2.5), y:rR(window.innerHeight * .4, window.innerHeight * .6)})
	}

	render() {
		const { isMobile } = helpers;
		const blackstars = [];
		const blackplanets = [];
		const starNum = isMobile() ? 60 : 120;
		const planetNum = 1;

		for (let i = 0; i < starNum; i++) {
			blackstars.push(<div className="blackStar" key={`starSVG${i}`}/>)
		}
		for (let i = 0; i < planetNum; i++) {
			blackplanets.push(<RadialSVG className="blackRing" key={`${i}`}/>)
		}

		return(
			<div className="homeBackdrop">
				<div className="homeStars" ref={c => this.backdropStars = c}>
					{blackstars}
				</div>
				<div className="homePlanets" ref={c => this.backdropPlanets = c}>
					{blackplanets}
				</div>
				{/*<div className="homeHalo" ref={c => this.halo = c}>
									<Halo className="blackHalo" />
								</div>*/}
			</div>
		)
	}
}

import React, { Component } from 'react';
import { TimelineMax, TweenMax } from 'gsap';
import BlackStarSVG from '../../public/assets/star';
import BlackStarShapeSVG from '../../public/assets/starShape';
import PlanetSVG from '../../public/assets/planetSVG1';
import Line from '../../public/assets/line';
import helpers from '../utils/helpers';
import { default as utils } from '../utils/animationHelpers'


export default class Home extends Component {
	constructor(props) {
		super(props)

	}

	componentDidMount() {	
		const { animateStaticStar } = utils;
		const { random: r, randomRange: rR } = helpers;
		const stars = Array.from(this.backdropStars.children);
		const planets = Array.from(this.backdropPlanets.children);

		stars.forEach(star => {
			TweenMax.to(star, .1, {opacity:rR(.2, 1)})
			TweenMax.to(star, 1.8, {scale:rR(1, 2), x:rR(-window.innerWidth/2, window.innerWidth/2), y:r(window.innerHeight) * .95})
			animateStaticStar(star, 2, .2)
		})

		planets.forEach(planet => {
			TweenMax.to(planet, .1, {opacity:rR(.2, 1)})
			TweenMax.to(planet, 1.8, {scale:rR(1, 2), x:rR(-window.innerWidth/2, window.innerWidth/2), y:r(window.innerHeight) * .95})
		})

	}

	render() {
		const { isMobile } = helpers;
		const blackstars = [];
		const blackplanets = [];
		const starNum = isMobile() ? 60 : 120;
		const planetNum = 8;

		for (let i = 0; i < starNum; i++) {
			blackstars.push(<BlackStarShapeSVG style={{/*filter: "url(#blur)"*/}} className="blackStar" key={`${i}`}/>)
		}
		for (let i = 0; i < planetNum; i++) {
			blackplanets.push(<PlanetSVG style={{/*filter: "url(#blur)"*/}} className="blackStar" key={`${i}`}/>)
		}
		console.log(blackstars[0]);

		return(
			<div>
				<div ref={c => this.backdropStars = c}>
					{blackstars}
				</div>
				<div ref={c => this.backdropPlanets = c}>
					{blackplanets}
				</div>
			</div>
		)
	}
}

// <defs>
//   <filter id="blur" x="0" y="0">
//     <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
//   </filter>
// </defs>

// <?xml version="1.0" encoding="utf-8"?>
// <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
// <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
// <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
// 	 width="15.12px" height="15.12px" viewBox="0 0 15.12 15.12" enable-background="new 0 0 15.12 15.12">
// 	<defs>
//     <filter id="blur" x="0" y="0">
//       <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
//     </filter>
//   </defs>
// <circle fill="#262B3A" stroke="rgba(249, 227, 227, 1)" stroke-width="1" cx="7.5" cy="7.5" r="4" filter="url(#blur)"/>
// </svg>
// <!-- #08051E 262B3A 0B0D13 stroke:0A0D1A 0F111B 2C3144-->
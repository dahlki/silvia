import React, { Component } from 'react';
import { TimelineMax, TweenMax } from 'gsap';
import Silvia from '../../public/assets/silvia.svg';
import S from '../../public/assets/s.svg'
import I1 from '../../public/assets/i1.svg'
import L from '../../public/assets/l.svg'
import V from '../../public/assets/v.svg'
import I2 from '../../public/assets/i2.svg'
import A from '../../public/assets/a.svg'
import FadeInWrapper from './FadeInWrapper';
import helpers from '../utils/helpers';
import anime from 'animejs';


export default class NameHome extends Component {
	constructor(props) {
		super(props)

		this.handleHover = this.handleHover.bind(this);
	}

	componentDidMount() {
		TweenMax.staggerFrom(this.name.children, 5, {scale:0.5, opacity:0, delay: 1.5, ease:Elastic.easeOut.config(.9), force3D:true}, .3);
		TweenMax.staggerTo(this.name.children, 1, {opacity:0, ease:Back.easeIn}, .2);
	}

/////TODO//////
	handleHover(e) {
		// const path = anime.path('.v path');
		// console.log(path());
		// anime({
		//   targets: '.dot',
		//   translateX: path('x'),
		//   translateY: path('y'),
		//   rotate: path('angle'),
		//   duration: 3000,
		//   loop: false,
		//   easing: 'linear'
		// });

	}
	
	render() {
		const {shuffle} = helpers;
		let NameLetters = shuffle([
			<S key="s" className="silvia s" />, 
			<I1 key="i1" className="silvia i1" />, 
			<L key="l" className="silvia l" />, 
			<V key="v" className="silvia v"/>, 
			<I2 key="i2" className="silvia i2" />, 
			<A key="a" className="silvia a" />
		])

		const dotStyle = {position: "absolute", width: ".2em", height: ".2em", borderRadius: "50%", backgroundColor: "white", top: "-6em", left:"-20em"}
		return (
			<div ref={this.props.nameDiv} className="silviaDiv" onMouseOver={this.handleHover}>
				{/*<div className="silvia dot" style={dotStyle}></div>*/}
				<div ref={c=>this.name=c}>
					{NameLetters}
				</div>
			</div>
		)
	}
}


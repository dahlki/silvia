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


export default class NameHome extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		TweenMax.staggerFrom(this.name.children, 5, {scale:0.5, opacity:0, delay: 1.5, ease:Elastic.easeOut.config(.9), force3D:true}, .3);
		TweenMax.staggerTo(this.name.children, 1, {opacity:0, ease:Back.easeIn}, .2);
	}
	
	render() {
		const {shuffle} = helpers;
		let NameLetters = shuffle([
			<S key="s" className="silvia" />, 
			<I1 key="i1" className="silvia" />, 
			<L key="l" className="silvia" />, 
			<V key="v" className="silvia"/>, 
			<I2 key="i2" className="silvia" />, 
			<A key="a" className="silvia" />
		])
		return (
			<div ref={this.props.nameDiv} className="silviaDiv">
				<div ref={c=>this.name=c}>
					{NameLetters}
				</div>
			</div>
		)
	}
}


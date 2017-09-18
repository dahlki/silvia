import React, { Component } from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import {Transition, TransitionGroup} from 'react-transition-group';
import Stardust from './Stardust';
import NameHome from './NameHome';
import Contact from './ContactContainer';
import Projects from './Projects';
import ScrollToTop from './ScrollToTopOnMount';
import HomeBackdrop from './HomeBackdrop';
import helpers from '../utils/helpers';
import gradient from '../../public/assets/sunsetGradient2.jpg';
// import gradient from '../../public/assets/multiGradient.jpg';

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			window: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      deltaY: 0
		}
		this.handleWheelMove = this.handleWheelMove.bind(this)
	}

	handleWheelMove(e) {
		if (Math.abs(e.deltaY) > 40) this.setState({ deltaY: e.deltaY })	
	}

	render() {
		const {isMobile} = helpers
		let bounds, w, h
		const Stars = [];
    let numOfStars = 12;
    if (isMobile()) numOfStars = 18;
		if (this.nameDiv) {
			bounds = this.nameDiv.getBoundingClientRect();
			w = bounds.right * 1.25
			h = bounds.bottom * 1.25
	    for (let i = 0; i < numOfStars; i++ ) {
	      Stars.push(<Stardust w={w} h={h} starType={"active"} key={i + ''}/>)
	    }
		}
		const background = {
      backgroundImage: `url(${gradient})`,
      backgroundPosition: "center",
      position: "absolute",
		  height: "100vh",
		  width: "100vw",
		  backgroundSize: "cover"
		}
  
	  return (
	    <div style={background} className='home gradient' onWheel={this.handleWheelMove}>
	    	<ScrollToTop/>
	    	<NameHome nameDiv={name => this.nameDiv = name} />
	    	{Stars}
	    	<Projects/>
		    <HomeBackdrop/>
	    	<Contact screen={this.state.window}/>
	    </div>
	  )
	}
}
 
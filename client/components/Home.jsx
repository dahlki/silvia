import React, { Component } from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import {Transition, TransitionGroup} from 'react-transition-group';
import Stardust from './Stardust';
import NameHome from './NameHome';
import Contact from './Contact';
import Projects from './Projects';
import ScrollToTop from './ScrollToTopOnMount';
import HomeBackdrop from './HomeBackdrop';
import helpers from '../utils/helpers';


export default class Home extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {isMobile} = helpers
		let bounds, w, h
		const Stars = [];
    let numOfStars = 10;
    if (isMobile()) numOfStars = 15;
		if (this.nameDiv) {
			bounds = this.nameDiv.getBoundingClientRect();
			w = bounds.right * 1.25
			h = bounds.bottom * 1.25
	    for (let i = 0; i < numOfStars; i++ ) {
	      Stars.push(<Stardust w={w} h={h} starType={"active"} key={i + ''}/>)
	    }
		}

	  return (
	    <div className='home gradient'>
	    	<ScrollToTop/>
	    	<NameHome nameDiv={name => this.nameDiv = name} />
	    	{Stars}
	    	<Projects/>
		    <HomeBackdrop/>
	    	{<Contact/>}
	    </div>
	  )
	}
}
 
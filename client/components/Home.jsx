import React, { Component } from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import {Transition, TransitionGroup} from 'react-transition-group';
import ScrollMagic from 'scrollmagic';
import Stardust from './Stardust';
import NameHome from './NameHome';
import Contact from './ContactContainer';
import Projects from './Projects';
import ScrollToTop from './ScrollToTopOnMount';
import HomeBackdrop from './HomeBackdrop';
import helpers from '../utils/helpers';
import gradient from '../../public/assets/sunsetGradient2.jpg';
import projects from '../utils/projects'; // array of projects


export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			window: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      deltaY: 0,
      projects: [],
      projectNum: 0,
      scroll: false
		}
		this._timeout = null;
		this.handleWheelMove = this.handleWheelMove.bind(this);
		this.setNextProject = this.setNextProject.bind(this)
	}

	setNextProject(direction) {
		const { isMobile } = helpers;
		const delay = isMobile() ? 800 : 100
		let num

		if (direction === "forward") {
			num = (this.state.projectNum + 1) % this.state.projects.length
		} else {
			const nextNum = (this.state.projectNum-1) % this.state.projects.length
			num = nextNum < 0 ? this.state.projects.length - 1 : nextNum;
		}

		if(this._timeout){ //if there is already a timeout in process cancel it
      clearTimeout(this._timeout);
     }

		this._timeout = setTimeout(() => {
		  this._timeout = null;
		  this.setState({ scroll: false });
		  this.setState({projectNum: num})
		}, delay);

	}

	handleWheelMove(e) {
		const { isMobile } = helpers;

		if(this._timeout){ //if there is already a timeout in process cancel it
      clearTimeout(this._timeout);
     }
     // if (isMobile()) this.setNextProject("forward")
     // else if (e.deltaY > 0 && isMobile()) this.setNextProject()	

     if (e.deltaY > 0 || isMobile()) this.setNextProject("forward")
     else if (e.deltaY < 0 && !isMobile()) this.setNextProject()

     if(!this.state.scroll) {
     	this.setState({ scroll: true });
     }
	}

	componentDidMount() {
		this.setState({projects})
	}

	render() {
		const {isMobile} = helpers
		const mobile = isMobile()
		let bounds, w, h
		const Stars = [];
    let numOfStars = 12;
    if (mobile) numOfStars = 18;

		if (this.nameDiv) {
			bounds = this.nameDiv.getBoundingClientRect();
			w = bounds.right * 1.25
			h = bounds.bottom * 1.25
			if (mobile) { h = bounds.bottom * 2}
	    for (let i = 0; i < numOfStars; i++ ) {
	      Stars.push(<Stardust w={w} h={h} starType={"active"} key={i + ''}/>)
	    }
		}
		const background = {
      backgroundImage: `url(${gradient})`,
      backgroundPosition: "center",
      position: "fixed",
		  height: "100vh",
		  width: "100vw",
		  backgroundSize: "cover",
		  backgroundPosition: "center",
		  backgroundAttachment: "fixed",
		  backgroundSize: "cover",
		  bottom: 0
		}

		const project = this.state.projects[this.state.projectNum]
  
	  return (
	    <div style={background} className='home gradient' onWheel={this.handleWheelMove} onTouchMove={this.handleWheelMove}>
	    	<ScrollToTop/>
	    	<NameHome nameDiv={c => this.nameDiv = c} />
	    	{Stars}
	    	{	
	    		project &&
	    		<Projects scroll={this.state.scroll} project={project} projectDiv={c => this.projectDiv = c} />
	    	}
		    <HomeBackdrop/>
	    	<Contact screen={this.state.window}/>
	    </div>
	  )
	}
}
 
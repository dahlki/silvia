import React, { Component } from 'react';
import { TimelineMax, TweenMax } from 'gsap'
import classnames from 'classnames/bind';
import debounce from 'lodash.debounce';
import FadeInWrapper from './FadeInWrapper';
import ProjectInfo from './ProjectInfo';
import Youtube from '../../public/assets/youtube';
import Github from '../../public/assets/github';
import Link from '../../public/assets/link';
const initialDelay = 2000;


class Projects extends Component {
	constructor(props) {
		super(props)
		this.state = {
			topOffset: "200%",
			show:false,
			showProjectInfo: false,
			animating:false,
			iconHover:false,
			bounds: {}
		}
		this.handleHover = this.handleHover.bind(this)
		this.handleLeave = this.handleLeave.bind(this)

		this.tweenLeave = this.tweenLeave.bind(this)
		this.tweenEnter = this.tweenEnter.bind(this)

		this.timelineStart = debounce(this.timelineStart.bind(this), 800, {"maxWait": 1400,leading:true, trailing:false})
		this.projectsTL = new TimelineMax({paused:true})
	}

	handleHover(e) {
		console.log('handleHover');
		this.setState({bounds:this.img.getBoundingClientRect()})
		this.setState({showProjectInfo: true});
	}
	handleLeave(e) {
		console.log('handleLeave');
		const {top, bottom, left, right} = this.state.bounds
		if (e.clientX > right || e.clientX < left || e.clientY > bottom || e.clientY < top) this.setState({showProjectInfo: false});
	}

	tweenLeave() {
		console.log('leave');
		const divs = Array.from(this.project.children);

		divs.forEach((div, i) => {
			div.id = "leave";

			TweenMax.staggerFromTo(
				"#leave",
				.5,
				{top: 0},
				{top: `-${this.state.topOffset}`, ease: Back.easeIn.config(.8), opacity: .3},
				.4 - (i * .125)
			)
			
		});
	}

	tweenEnter() {
		console.log('enter');
		console.log('------------');

		TweenMax.staggerFromTo(
			".animate", 
			1, 
			{top: this.state.topOffset}, 
			{top: 0, ease: Elastic.easeOut.config(.55, .65)}, 
			.4
		)
	}

	timelineStart() {
		console.log('timelineStart');
		this.projectsTL.restart()
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.state === "entering") return true;
		if (!this.state.show || nextProps.scroll) return true;
		if (this.state.showProjectInfo !== nextState.showProjectInfo) return true;
		else return nextProps.project.title !== this.props.project.title;
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.state === "entering") this.setState({show:true})
		else if (nextProps.scroll) this.setState({show:true})
		else this.setState({show:false})
	}	

	componentDidUpdate(prevProps, prevState) {
		if (prevState.showProjectInfo && !this.state.showProjectInfo) return;

		if (prevProps.project.title !== this.props.project.title) this.setState({showProjectInfo:false})

		if (this.props.scroll) {
			this.projectsTL.pause()
			// const divs = Array.from(this.project.children);
			// divs.forEach(div => div.id = "leave");
			this.timelineStart();
		} else return
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({show:true})
			TweenMax.staggerFromTo(".animate", 1.5, {top: "200%"}, {top: 0, ease: Back.easeOut.config(1.2)}, .5);
		}, initialDelay);

		this.projectsTL
		.add(this.tweenLeave)
		.add(()=> this.setState({show:true}), 1)
		.add(this.tweenEnter)
		.add(() => this.projectsTL.kill())
	}
	
	render() {
		const project = this.props.project;

		const title = project.title;
		const image = project.image;

		const header = project.header;
		const description = project.description;

		const github = project.github;
		const link = project.link;
		const video = project.video;

		const imgStyle = {maxWidth: "100%", maxHeight: "100%", backgroundColor:"white", pointerEvents:"auto"};
		const imgClass = classnames("animate", "projectImg", {"hover": this.state.showProjectInfo});
		const projectInfoClass = classnames("animate", "projectInfo")

		const githubIconStyle = {width: "1.8em", height: "1.8em", position:"absolute", marginLeft:".5em"}

		return (
			
			<div ref={c => this.projectDiv = c} style={this.props.style} className="projectDiv">
				{ 
					this.state.show && project ?
					(
						<div ref={c => this.project = c} className="animate project">
							<div className="animate projectTitle">{title}</div>

							{ 
								title !== "projects" ?
								(<img ref={c => this.img = c} style={imgStyle} className={imgClass} src={image} onMouseOver={this.handleHover} onMouseLeave={this.handleLeave} ></img>) :
								(<div className="animate projectImg projectIntroTextDiv">
									<div className="projectIntroText">
										thanks for visting!<br/>
										please scroll to see my projects<br/>
										and works in progress.<br/>
										this site:
										<a href="https://github.com/dahlki/silvia" target="_blank"><Github style={githubIconStyle} className="project-icon github-site" /></a>
									</div>
								</div>)
							}

							{
								this.state.showProjectInfo ?
								<ProjectInfo 
									infoClass={projectInfoClass}
									header={header}
									description={description}
									github={github}
									video={video}
									link={link}
								/>	: null			
							}		

						</div>
					) : null
				}
			</div>
		)
	}
};


const duration = initialDelay;
const FadeInProjects = FadeInWrapper(Projects, duration);
export default FadeInProjects;


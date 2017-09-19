import React, { Component } from 'react';
import classnames from 'classnames/bind';
import FadeInWrapper from './FadeInWrapper';


class Projects extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show:false
		}
		this._timeout = null
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (!this.state.show || nextProps.scroll) return true;
		else return nextProps.project.title !== this.props.project.title;
	}

	componentWillReceiveProps(nextProps) {
		if (!nextProps.scroll) this.setState({show:false})
		else this.setState({show:true})
	}	

	componentDidUpdate(prevProps, prevState) {
		if (this.props.scroll) {
			const divs = Array.from(this.project.children)
			divs.forEach(div => div.id = "leave")
			TweenMax.staggerFromTo("#leave", .8, {top: 0}, {top: "-200%", ease: Back.easeIn.config(1)}, .25);

		} else {
			this.setState({show:true})
			const tween = TweenMax.staggerFromTo(".animate", 1.5, {top: "200%"}, {top: 0, ease: Back.easeOut.config(1)}, .5);
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({show:true})
			const tween = TweenMax.staggerFromTo(".animate", 1.8, {top: "200%"}, {top: 0, ease: Back.easeOut.config(1)}, .5);
		}, 1000)
	}

	render() {
		const project = this.props.project
		// const style = {width: "100%", maxHeight: "fit-content", top: "10%"}
		const style = {maxWidth: "100%", maxHeight: "100%"}

		return (
			
			<div ref={c => this.projectDiv = c} style={this.props.style} className="projectDiv">
				{ 
					this.state.show && project ?
					(<div ref={c => this.project = c} className="animate project">
						<div className="animate projectTitle">{project.title}</div>
						<img style={style} className="animate projectImg" src={project.image}></img>
					</div>) : null
				}
			</div>
		)
	}
};


// const duration = 2800;
// const FadeInProjects = FadeInWrapper(Projects, duration);
// export default FadeInProjects;
export default Projects

/*<ul style={this.props.style} className="projects">
							<li className="project title">projects</li>
							<li className="project palace">
								<div className="projectCaption">the palace of music</div>
								{<img className="palaceImg" src={palace} style={style}/>}
							</li>
							<li className="project blooming">
								<div className="projectCaption">blooming ice</div>
							</li>
							<li className="project graceshopper">
								<div className="projectCaption">dry goods</div>
							</li>
						</ul>*/
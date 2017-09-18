import React, { Component } from 'react';
import FadeInWrapper from './FadeInWrapper';
import thePalaceOfMusic from '../../public/assets/thepalaceofmusic.jpg';


class Projects extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const palace = `${thePalaceOfMusic}`
		// const style = {width: "100%", maxHeight: "fit-content", top: "10%"}
		const style = {display: "block", maxWidth: "100%", maxHeight: "100%"}

		return (
			<div style={this.props.style} className="projects">
				<div className="project">
					<div className="projectTitle">the palace of music</div>
					<img style={style} className="projectImg" src={palace}></img>
				</div>
			</div>
			)
	}
};


const duration = 2800;
const FadeInProjects = FadeInWrapper(Projects, duration);
export default FadeInProjects;

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
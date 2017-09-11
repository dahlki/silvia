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
			<ul style={this.props.style} className="projects">
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
			</ul>
			)
	}
};


const duration = 2800;
const FadeInProjects = FadeInWrapper(Projects, duration);
export default FadeInProjects;
import React, { Component } from 'react';
import classnames from 'classnames/bind';
import FadeInWrapper from './FadeInWrapper';
import Youtube from '../../public/assets/youtube';
import Github from '../../public/assets/github';
import Link from '../../public/assets/link';


	
const ProjectInfo = ({infoClass, header, description, github, video, link}) => {

	const iconStyle = {width: "2em", height: "2em", pointerEvents: "all", margin:".5em"}
	const infoStyle = {fontFamily: "'Montserrat', sans-serif", boxSizing:"border-box", pointerEvents:"none", color:"white", textAlign:"center", marginTop:"4em", paddingLeft:"2em", paddingRight:"2em", width:"100%", zIndex:"4005", 
	fontSize:"1.2em", whiteSpace:"pre-wrap", lineHeight: "2", letterSpacing: "1px"}
	const headerStyle ={fontSize: "1.15em", textDecoration: "underline"}

	// const header = this.props.header;
	// const description = this.props.description
	// const github = this.props.github
	// const video = this.props.video
	// const link = this.props.link

	return(

		<div style={infoStyle} className={infoClass}>
			<div className="infoLines"></div>
			<div className="infoLines"></div>

			<div style={headerStyle} className="header">{header}</div>
			<div className="description">{description}</div>

			{ github && (<a href={github} target="_blank"><Github style={iconStyle} className="project-icon github-project" /></a>) }
			{ video && (<a href={video} target="_blank"><Youtube style={iconStyle} className="project-icon youtube-project" /></a>) }
			{ link && (<a href={link} target="_blank"><Link style={iconStyle} className="project-icon link-project" /></a>) }
		</div>

	)

}

export default ProjectInfo;
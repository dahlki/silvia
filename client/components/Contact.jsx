import React, { Component } from 'react';
import classnames from 'classnames/bind';
import anime from 'animejs';
import Github from '../../public/assets/github';
import Linkedin from '../../public/assets/in';
import Email from '../../public/assets/email';
import ResumeIcon from '../../public/assets/downloadResume';
import MyResume from '../../public/assets/silvia-sonn.pdf';
import ContactTitle from './ContactTitle';


class Contact extends Component {
  constructor(props) {
    super(props)
    this.state ={
      name: "contact me"
    }

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleTableLeave = this.handleTableLeave.bind(this);
    this.handleTitleEnter = this.handleTitleEnter.bind(this);
    this.handleTitleLeave = this.handleTitleLeave.bind(this);
  }

  handleMouseOver(e) {
    if (e.target.name) this.setState({name: e.target.name});
  }
  handleMouseLeave() {
    this.setState({name: ""});
  }
  handleTableLeave() {
    this.setState({name: "contact me"});
  }
  handleTitleEnter(letter, index) {
    let animateLetter = anime({
      targets: `.${letter.className}`,
      duration: 550,
      opacity:1,
      delay: (el, index) => index * 70,
      easing: 'easeOutSine',
      rotateY: [-90, 0]
    });
  }
  handleTitleLeave(letter, index) {
    let animateLetter = anime({
      targets: `.${letter.className}`,
      duration: 300,
      opacity: 0,
      delay: (el, index) => index * 70,
      easing: 'easeOutSine',
      rotateY: 45
    });
  }

  render() {
    const handleLinkClick = this.props.handleLinkClick;
    
  	return(
        <div className="contactDiv">
          <ContactTitle animation={this.handleTitleEnter} animationLeave={this.handleTitleLeave} name={this.state.name}/>
    			<table onMouseLeave={this.handleTableLeave}>
            <tbody>
              <tr>
                <td><a className='github-icon' name="github" onClick={handleLinkClick} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} href="https://github.com/dahlki" target="_blank"><Github name="github" /></a></td>
                <td><a className='linkedin-icon' name="linkedin" onClick={handleLinkClick} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} href="https://www.linkedin.com/in/silvia-sonn-787268139/" target="_blank"><Linkedin name="linkedin" /></a></td>
                <td><a className='email-icon' name="email" onClick={handleLinkClick} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} href="mailto:silviasonn@gmail.com"><Email name="email" /></a></td>
                <td><a className='resume-icon' name="resume" onClick={handleLinkClick} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} href={MyResume} download="silvia-sonn.pdf"><ResumeIcon name="resume" /></a></td>
              </tr>
            </tbody>
        </table>
        </div>
  	)
  }
}

export default Contact;

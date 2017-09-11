import React, { Component } from 'react';
import Github from '../../public/assets/github';
import Linkedin from '../../public/assets/in';
import Email from '../../public/assets/email';
import ResumeIcon from '../../public/assets/downloadResume';
import MyResume from '../../public/assets/silvia-sonn.pdf';
import FadeInWrapper from './FadeInWrapper';


class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bounds: {
        left: 0, 
        right: 0,
        top: 0
      },
    }
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    const {left, right, top} = this.line1.getBoundingClientRect();
    this.setState({ bounds: {left, right, top}});
  }

  handleMouseMove(e) {
    console.log(this.state.bounds);
    // this.setState({pos: {left: e.pageX,top: e.pageY}});
    // const [moveX, moveY] = [this.state.pos.left, this.state.pos.top];
    // console.log(moveX, moveY);
  }

  render() {
    return  (
      <div style={this.props.style} className="menu" onMouseMove={this.handleMouseMove}>
        <div ref={c => this.line1 = c} className="contactMenu line1"></div>
        <div ref={c => this.line2 = c} className="contactMenu line2"></div>
        {/*<div className="tableContainer">
                  <table>
                    <tbody>
                      <tr>
                        <td><a href="https://github.com/dahlki" target="_blank"><Github className='github-icon'/></a></td>
                        <td><a href="https://www.linkedin.com/in/silvia-sonn-787268139/" target="_blank"><Linkedin className='linkedin-icon'/></a></td>
                        <td><a href="mailto:silviasonn@gmail.com"><Email className='email-icon'/></a></td>
                        <td><a href={MyResume} download="silvia-sonn.pdf"><ResumeIcon className='resume-icon'/></a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>*/}
      </div>
    )
  }
}

// export default Contact;
const duration = 1500;
const FadeInContact = FadeInWrapper(Contact, duration);
export default FadeInContact;

import React, { Component } from 'react';
import { TweenLite } from 'gsap';
import { TransitionGroup, Transition } from 'react-transition-group';
import classnames from 'classnames/bind';
import nebula from '../../public/assets/nebula.jpg';
import Name from './NameContainer';
import Stardust from './Stardust';
import Starburst from './Starburst';
import StarburstEmitter from './StarburstEmitter';
import { default as utils } from '../utils/helpers';
const isMobile = utils.isMobile;

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isNameHover: false,
      nameDiv: null,
      mousePos: {
        x: null,
        y: null
      }
    }
    this.handleHover = this.handleHover.bind(this);
    this.getNameDiv = this.getNameDiv.bind(this);
  }

  handleHover(e) {
    const { clientX: x, clientY: y } = e
    this.setState({ isNameHover: !this.state.isNameHover, mousePos: {x, y} });
    // if (this.starburstEmitter) this.starburstEmitter.burst();
  }

  getNameDiv(ref) {
    this.setState({nameDiv: ref})
  }

  render () {
    const mobile = isMobile();
    const {isNameHover} = this.state;
    const background = {
      color: this.props.defaultColor,
      backgroundColor: this.props.defaultBackgroundColor,
      backgroundImage: `url(${nebula})`
    };
    const stardustContainerStyle = classnames('tg');
    const Stars = [];
    const StaticStars = [];
    let numOfStars = 50;
    if (mobile) numOfStars = 30;

    for (let i = 0; i < numOfStars; i++ ) {
      Stars.push(<Stardust isStatic={false} key={i + ''}/>)
      if (i % 1.5) StaticStars.push(<Stardust isStatic={true} key={i + ''}/>)
    }

    return (
      <div className="background" style={background}>
        <Name 
          pathname={this.props.match.path} 
          onMouseOver={this.handleHover} 
          onMouseLeave={this.handleHover} 
          getNameDiv={this.getNameDiv}
        />
        <TransitionGroup className={stardustContainerStyle}>
          {Stars}
        </TransitionGroup>
        <TransitionGroup className={stardustContainerStyle}>
          {StaticStars}
        </TransitionGroup>
          {
            (isNameHover)
            ? (
              <div className="starburstDiv">
                <StarburstEmitter 
                  ref={c => this.starburstEmitter = c} 
                  mousePos={this.state.mousePos} 
                  starburstDiv={this.state.nameDiv}
                />
              </div>
              )
            : null
          }
      </div>
    )
  }
}

Landing.defaultProps = {
  defaultColor: 'rgb(102, 19, 57)',
  defaultBackgroundColor: '#f9c4b9',
}

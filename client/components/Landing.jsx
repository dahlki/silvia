import React, { Component } from 'react';
import { TweenLite } from 'gsap';
import { TransitionGroup, Transition } from 'react-transition-group';
import styled from 'styled-components'
import NameLanding from './NameLanding';
import Stardust from './Stardust';
import StarburstEmitter from './StarburstEmitter';
import nebula from '../../public/assets/nebula.jpg';
import helpers from '../utils/helpers';
import { StandardBackgroundImg } from '../../public/stylesheets/styled-index'


const Nebula = StandardBackgroundImg.extend`
  color: #3B0B21;
  background-color: #F9E3E9;
  background-image: url(${nebula});
`

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
    const { clientX: x, clientY: y } = e;
    this.setState({ isNameHover: !this.state.isNameHover, mousePos: {x, y} });
  }

  getNameDiv(ref) {
    this.setState({nameDiv: ref});
  }

  render () {
    const {isMobile} = helpers;
    const {isNameHover} = this.state;
    const Stars = [];
    const StaticStars = [];
    let numOfStars = isMobile() ? 30 : 50;

    for (let i = 0; i < numOfStars; i++) {
      Stars.push(<Stardust starType={"active"} key={`${i}`}/>);
      if (i % 2) StaticStars.push(<Stardust starType={"bubble"} key={`${i}`}/>);
    }

    return (
      <Nebula>
        <NameLanding
          onMouseOver={this.handleHover} 
          onMouseLeave={this.handleHover} 
          getNameDiv={this.getNameDiv}
          onClick={this.props.nameClick}
        />
        {Stars}
        {StaticStars}
        {
          isNameHover ? 
          <StarburstEmitter 
            mousePos={this.state.mousePos} 
            starburstDiv={this.state.nameDiv}
          />
          : null
        }
      </Nebula>
    )
  }
}

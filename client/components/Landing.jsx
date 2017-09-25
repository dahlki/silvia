import React, { Component } from 'react';
import { TweenLite } from 'gsap';
import { TransitionGroup, Transition } from 'react-transition-group';
import classnames from 'classnames/bind';
import styled from 'styled-components'
import nebula from '../../public/assets/nebula.jpg';
import NameLanding from './NameLanding';
import Stardust from './Stardust';
import Starburst from './Starburst';
import StarburstEmitter from './StarburstEmitter';
import helpers from '../utils/helpers';
import { StyledBackgroundImg } from '../../public/stylesheets/styled-index'


const Nebula = StyledBackgroundImg.extend`
  color: rgb(102, 19, 57);
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
    const { clientX: x, clientY: y } = e
    this.setState({ isNameHover: !this.state.isNameHover, mousePos: {x, y} });
  }

  getNameDiv(ref) {
    this.setState({nameDiv: ref})
  }

  render () {
    const {isMobile} = helpers;
    const {isNameHover} = this.state;
    const background = {
      color: this.props.defaultColor,
      backgroundColor: this.props.defaultBackgroundColor,
      backgroundImage: `url(${nebula})`
    };
    const Stars = [];
    const StaticStars = [];
    let numOfStars = 50;
    if (isMobile()) numOfStars = 30;

    for (let i = 0; i < numOfStars; i++ ) {
      Stars.push(<Stardust starType={"active"} key={i + ''}/>)
      if (i % 2) StaticStars.push(<Stardust starType={"bubble"} key={i + ''}/>)
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
          (isNameHover)
          ? (
              <StarburstEmitter 
                ref={c => this.starburstEmitter = c} 
                mousePos={this.state.mousePos} 
                starburstDiv={this.state.nameDiv}
              />
            )
          : null
        }
      </Nebula>
    )
  }
}

Landing.defaultProps = {
  defaultColor: 'rgb(102, 19, 57)',
  defaultBackgroundColor: '#F9E3E9',
}

import React, { Component } from 'react';
import { TweenLite } from 'gsap';
import { TransitionGroup } from  'react-transition-group';
import classnames from 'classnames/bind';
import nebula from '../../public/assets/nebula.jpg';
import Name from './NameContainer';
import Stardust from './Stardust';

const background = {
  color: 'pink',
  backgroundImage: 'url(' + nebula + ')',
};


export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameHover: false,
      nameDiv: null
    }
    this.handleHover = this.handleHover.bind(this);
    this.getNameDiv = this.getNameDiv.bind(this);
  }

  handleHover() {
    this.setState({nameHover: !this.state.nameHover});
  }

  getNameDiv(ref) {
    this.setState({nameDiv: ref.children[0].children[0]})
  }

  render () {
    const stardustContainerStyle = classnames('tg');
    const numOfStars = 50;
    // const numOfStaticStars = 20;
    const Stars = [];
    const StaticStars = [];
    for (let i = 0; i < numOfStars; i++ ) {
      Stars.push(<Stardust hover={this.state.nameHover} hoverDiv={this.state.nameDiv} key={i + ''}/>)
      StaticStars.push(<Stardust static={true} key={i + ''}/>)
    }
    if (this.state.nameDiv) {
      // console.log('name div',this.state.nameDiv.clientWidth,this.state.nameDiv.clientHeight);
    }
    return (
      <div className="background" style={background}>
        <div onMouseOver={this.handleHover} onMouseLeave={this.handleHover}>
          <Name pathname={this.props.match.path} getNameDiv={this.getNameDiv}/>
        </div>
        <TransitionGroup className={stardustContainerStyle}>
          {Stars}
          {StaticStars}
        </TransitionGroup>
      </div>
    )
  }

}

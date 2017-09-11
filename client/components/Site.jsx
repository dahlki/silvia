import React, { Component } from 'react';
import { TweenLite, TimelineMax } from 'gsap';
import { TransitionGroup, Transition } from 'react-transition-group';
import classnames from 'classnames/bind';
import nebula from '../../public/assets/nebula.jpg';
import Landing from './Landing';
import Name from './NameContainer';
import Stardust from './Stardust';
import Starburst from './Starburst';
import StarburstEmitter from './StarburstEmitter';
import TransitionContainer from './TransitionContainer';
import Home from './Home';
import { default as utils } from '../utils/animationHelpers';
import { isMobile } from '../utils/helpers';


export default class Site extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLanding: false,
      startTransition: false,
      showHome: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.transitionTL = new TimelineMax({paused:true});
    this.handleTransition = this.handleTransition.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    this.setState({showLanding:true})
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({startTransition:true});
  }

  handleTransition() {
    this.setState({showHome:true})
  }

  handlePageChange() {
    this.setState({startTransition:false, showLanding:false})
  }

  render () {

    return (
      <div>
        {
          this.state.showLanding && !this.state.showHome ?
            (
              <Landing
                path={this.props.match.path}
                nameClick={this.handleClick}
              /> 
            )
            :null
        }
        {
          this.state.startTransition ?
            <TransitionContainer
              handleTransition={this.handleTransition}
              handlePageChange={this.handlePageChange}
            /> : null 
        }
        {
          (this.state.showHome) ?
          <Home/> : null
        }
      </div>
    )
  }
}


import React, { Component } from 'react';
import { TweenLite, TweenMax } from 'gsap';
import { default as utils } from '../utils/animationHelpers';


export default class Stardust extends Component {
  constructor(props) {
    super(props)
    this.state = {
      windowSize: {
        w: this.props.w,
        h: this.props.h,
      },
      star: [],
      staticStar: [],
      // isStatic: props.isStatic,
      starType: props.starType
    }
  }
 
  componentDidMount() {

    const {animateStar, animateStaticStar, setTween, setSVGTween} = utils;

    const h = this.state.windowSize.h;
    const w = this.state.windowSize.w;

    const star = this.starRef;

    const starType = this.state.starType;

    if (starType === "active") {
      setTween(star, 'star', w, h, .1) // (el, classname, window width, window height, opacity)
      this.setState({star})
      animateStar(star, w, h);

    } else if (starType === "bubble") {
      setTween(star, 'staticStar', w, h, .8) // (el, classname, window width, window height, opacity)
      this.setState({star})
      animateStaticStar(star);
    } 
  }

   handleResize(e) {
    const { innerWidth: w, innerHeight: h } = window;
    this.setState({windowSize: {w, h}})
  }

  render () {
    return (
      <div ref={c => this.stardustContainerRef = c}>
        <div ref={s => this.starRef = s}/>
      </div>
    )
  }
}

Stardust.defaultProps = {
  w: window.innerWidth,
  h: window.innerHeight
}

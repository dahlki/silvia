import React, { Component } from 'react';
import { TweenLite, TweenMax } from 'gsap';
import { default as utils } from '../utils/animationHelpers';
const r = utils.random;
const {animateStar, animateStaticStar, setTween} = utils;

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
      isStatic: props.isStatic,
      // stardustDiv: this.stardustRef
    }
  }

  componentDidMount() {
    // window.addEventListener("resize", this.handleResize.bind(this));
    const stardustDiv = this.stardustRef;
    // const h = stardustDiv.clientHeight;
    // const w = stardustDiv.clientWidth;
    const h = this.state.windowSize.h;
    const w = this.state.windowSize.w;

    const star = this.starRef;
    const staticStar = this.staticStarRef;

    if (!this.state.isStatic) {
      setTween(star, 'star', w, h, 0)
      this.setState({star})
      animateStar(star, w, h);
    } else {
      setTween(staticStar, 'staticStar', w, h, 1)
      this.setState({staticStar})
      animateStaticStar(staticStar);
    }
  }

   handleResize(e) {
    const { innerWidth: w, innerHeight: h } = window;
    this.setState({windowSize: {w, h}})
  }

  componentWillUnmount() {
    // window.removeEventListener("resize", this.handleResize.bind(this));
  }

  render () {
    return (
      <div ref={c => this.stardustRef = c}>
        <div ref={s => this.starRef = s}/>
        <div ref={s => this.staticStarRef = s}/>
      </div>
      )
  }
}

Stardust.defaultProps = {
  w: window.innerWidth,
  h: window.innerHeight
}

import React, { Component } from 'react';
import { TweenLite, TweenMax } from 'gsap';
import { default as utils } from '../utils/animationHelpers';
const r = utils.random;
const {animateStar, animateStaticStar, setTween} = utils;

export default class Stardust extends Component {
  constructor(props) {
    super(props)
    this.state = {
      star: [],
      staticStar: [],
      isStatic: props.isStatic,
      // stardustDiv: this.stardustRef
    }
  }

  componentDidMount() {
    const stardustDiv = this.stardustRef;

    const h = stardustDiv.clientHeight;
    const w = stardustDiv.clientWidth;

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

  render () {
    // console.log(this.state);
    return (
      <div className="stardust" ref={c => this.stardustRef = c}>
        <div ref={s => this.starRef = s}/>
        <div ref={s => this.staticStarRef = s}/>
      </div>
    )
  }
}

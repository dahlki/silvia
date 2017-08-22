import React, { Component } from 'react';
import { TweenLite, TweenMax } from 'gsap';

export default class Stardust extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Tweens: [],
      stardustDiv: this.stardustRef
    }
    // this.animateStar = this.animateStar.bind(this)
  }

  componentDidMount() {
    const stardustDiv = this.stardustRef;
    const h = stardustDiv.clientHeight;
    const w = stardustDiv.clientWidth;

    const star = this.starRef;
    const staticStar = this.staticStarRef;
    // console.log(this);
    const r = (max) => {
      return Math.random() * max;
    };
    const animateStar = (el) => {
      el.Tween = TweenLite.to(
        el,
        r(20)+30,
        {
          bezier:{values:[{x:r(w),y:r(h)},{x:r(w),y:r(h)}]},
          opacity:r(1),
          scale:r(1)+.5,
          delay:r(3),
          onComplete:animateStar,
          onCompleteParams:[el]
        }
      )
    };
    const animateStaticStar = (el) => {
      el.Tween1 = TweenMax.to(el,r(10)+3,{scale:r(1)+6,repeat:-1,yoyo:true,ease:Sine.easeInOut})
      el.Tween2 = TweenMax.to(el,r(10)+5,{opacity:0, repeat:-1,yoyo:true,ease:Quad.easeInOut})

    }



    if (!this.props.static) {
      TweenLite.set(
        star,
        {
          attr: {class:'star'},
          x: r(w),
          y: r(h),
          opacity: 0
        }
      );
      this.state.Tweens.push(star)
      animateStar(star);
    } else {TweenMax.set(
      staticStar,
      {
        attr: {class:'staticStar'},
        x: r(w),
        y: r(h),
        opacity: r(1)
      }
    );
      animateStaticStar(staticStar);
    }
  }

  componentDidUpdate(e) {
    // console.log('e', e);
    // console.log('stardust props',this.props);

    // const stardustDiv = this.stardustRef;
    // const r = (max) => {
    //   return Math.r() * max;
    // };
    // const animateStar = (el, h, w) => {
    //   el.Tween = TweenLite.to(el,r(20)+10,{bezier:{values:[{x:r(w),y:r(h)},{x:r(w),y:r(h)}]},opacity:r(1),scale:r(1)+0.5,delay:r(5),onComplete:animateStar,onCompleteParams:[el]})
    // };
    // let h = null
    // let w = null;
    // if (this.props.hover) {
    //   console.log(this.props.hover);
    //   h = window.innerHeight/2;
    //   w = window.innerWidth/2;
    // } else {
    //   console.log(this.props.hover);
    //   h = window.innerHeight;
    //   w = window.innerWidth;
    //
    // }
    // this.state.Tweens.forEach(star => animateStar(star, h, w))

  }

  render () {
    return (
      <div className="stardust" ref={c => this.stardustRef = c}>
        <div ref={s => this.starRef = s}/>
        <div ref={s => this.staticStarRef = s}/>
      </div>
    )
  }

}

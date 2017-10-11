import React, { Component } from 'react';
import { TimelineMax, TweenMax } from 'gsap'
import classnames from 'classnames/bind';
import Menu from './MenuContainer';
import Contact from './Contact';
import FadeInWrapper from './FadeInWrapper';
import { default as options } from '../utils/animationContact';
import helpers from '../utils/helpers';


class ContactContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bounds: {
        left: 0, 
        right: 0,
        top: 0
      },
      window: {
        width: props.screen.width,
        height: props.screen.height
      },
      menuOpen: false,
      menuHover: false
    }
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.updateWindow = this.updateWindow.bind(this);

    this.setMenuLinesPosition = this.setMenuLinesPosition.bind(this)

    /************ menu top lines *************/
    this.menuTLTop = new TimelineMax({paused:true, reversed:true});
    this.menuTLTop1Layers = new TimelineMax({paused:true, reversed:true})
    this.menuTLTop2Layers = new TimelineMax({paused:true, reversed:true})

    /************ menu bottom lines *************/
    this.menuTLBottom = new TimelineMax({paused:true, reversed:true});
    this.menuTLBottom1Layers = new TimelineMax({paused:true, reversed:true})
    this.menuTLBottom2Layers = new TimelineMax({paused:true, reversed:true})
  }


  handleMouseMove(e) {
    // const buffer = window.innerWidth * .02;
    // let {clientX: mouseX, clientY: mouseY} = e
    // let {left, right, top} = this.state.bounds

    // left -= buffer;
    // right += buffer;
    // top -= buffer;

    // if (mouseX > left && mouseX < right && mouseY > top) {
    //   console.log('show contactMenu');
    // }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindow);
  }

  updateWindow(e) {
    this.menuTLTop.kill();
    this.menuTLTop1Layers.kill();
    this.menuTLTop2Layers.kill();

    this.menuTLBottom.kill();
    this.menuTLBottom1Layers.kill();
    this.menuTLBottom2Layers.kill();

    const {innerWidth: width, innerHeight: height} = window;
    this.setState({window: {width, height}});  
  }

/************ opens/closes menu and handles animation *************/
  handleClick(e) { 
    e.preventDefault();

    this.menuTLTop.reversed() ? this.menuTLTop.play():this.menuTLTop.reverse();
    this.menuTLBottom.reversed() ? this.menuTLBottom.play():this.menuTLBottom.reverse();
    this.menuTLTop1Layers.reversed() ? this.menuTLTop1Layers.play():this.menuTLTop1Layers.kill();
    this.menuTLTop2Layers.reversed() ? this.menuTLTop2Layers.play():this.menuTLTop2Layers.kill();
    this.menuTLBottom1Layers.reversed() ? this.menuTLBottom1Layers.play():this.menuTLBottom1Layers.kill();
    this.menuTLBottom2Layers.reversed() ? this.menuTLBottom2Layers.play():this.menuTLBottom2Layers.kill();
    
    if (this.state.menuOpen) {
      // this.menuTLTop1Layers.kill();
      // this.menuTLTop2Layers.kill();
      // this.menuTLBottom1Layers.kill();
      // this.menuTLBottom2Layers.kill();
    } else {
      this.menuTLTop1Layers.restart()
      this.menuTLTop2Layers.restart()
      this.menuTLBottom1Layers.restart()
      this.menuTLBottom2Layers.restart()
     

    }
    this.setState({menuOpen:!this.state.menuOpen})
    // this.menuTL.reversed(!this.menuTL.reversed())
  }

/************ closes menu when mouse leaves menu div *************/
  handleMouseLeave() {
    this.setState({menuOpen:false, menuHover:false})

    if (this.state.menuOpen) {
      this.menuTLTop.reverse();
      this.menuTLBottom.reverse();
    }
      this.menuTLTop1Layers.kill();
      this.menuTLTop2Layers.kill();
      this.menuTLBottom1Layers.kill();
      this.menuTLBottom2Layers.kill();

    // this.menuTL.reversed(!this.menuTL.reversed())
  }
/************ prevents anchor clicks from closing menu *************/
  handleLinkClick(e) {
    console.log('click');
    // if (helpers.isMobile()) e.gesture.stopPropagation();
    e.stopPropagation();
  }

/************ used to add class to 'light up' menu on hover *************/
  handleMouseOver() {
    this.setState({menuHover:true})
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindow);

    let screen
    const { isMobile } = helpers;

    if (!isMobile() ) {
      screen = this.state.window
    }
    else {
      screen = this.menuDiv.getBoundingClientRect();
    }

    const {height, width} = screen;
    
    const halfHeight = height / 2;
    const rotation = 45;
    const { startPos, endPosLine1, endPosLine2, tweenLayer } = options
    const middleColor = "#1A1652";
    // F3BEB3 f6d1c9 B2BEC4
    const innerColor = "#F3BEB3" 
    // F8F1CE f9e4b9
    let BLineOffset
    let CLineOffset
    if (isMobile()) {
      BLineOffset = 8
      CLineOffset = 16
    } else {
      BLineOffset = 15
      CLineOffset = 30
    }
    const delay = 1.2
    const BLineDelay = "-=1.2"

    /************ menu top lines *************/
    this.menuTLTop
      .fromTo(".topLine1", 1, startPos(screen), endPosLine1(screen, -rotation))
      .fromTo(".topLine2", 1, startPos(screen), endPosLine1(screen, rotation), "-=1")

    this.menuTLTop1Layers
      .to(this.topLine1C, .5, tweenLayer(innerColor, (-width + CLineOffset), (-halfHeight + height * .08 + CLineOffset), delay) )
      .to(this.topLine1B, .6, tweenLayer(middleColor, (-width + BLineOffset), (-halfHeight + height * .08 + BLineOffset)), BLineDelay )
      .to(this.topLine1C, .5, tweenLayer(innerColor, (-width - CLineOffset), (-halfHeight + height * .08 - CLineOffset), .25) )
      .to(this.topLine1B, .6, tweenLayer(middleColor, (-width - BLineOffset), (-halfHeight + height * .08 - BLineOffset)), BLineDelay )

    this.menuTLTop2Layers
      .to(this.topLine2C, .5, tweenLayer(innerColor, (-width + CLineOffset), (-halfHeight + height * .08 - CLineOffset), delay) )
      .to(this.topLine2B, .6, tweenLayer(middleColor, (-width + BLineOffset), (-halfHeight + height * .08 - BLineOffset)), BLineDelay )
      .to(this.topLine2C, .5, tweenLayer(innerColor, (-width - CLineOffset), (-halfHeight + height * .08 + CLineOffset), .25) )
      .to(this.topLine2B, .6, tweenLayer(middleColor, (-width - BLineOffset), (-halfHeight + height * .08 + BLineOffset)), BLineDelay )

    /************ menu bottom lines *************/
    this.menuTLBottom
      .fromTo(".bottomLine1", 1, startPos(screen), endPosLine2(screen, -rotation))
      .fromTo(".bottomLine2", 1, startPos(screen), endPosLine2(screen, rotation), "-=1")

    this.menuTLBottom1Layers
      .to(this.bottomLine1C, .5, tweenLayer(innerColor, -CLineOffset, (-halfHeight + height * .05 - CLineOffset), delay) )
      .to(this.bottomLine1B, .6, tweenLayer(middleColor, -BLineOffset, (-halfHeight + height * .05 - BLineOffset)), BLineDelay )
      .to(this.bottomLine1C, .5, tweenLayer(innerColor, (CLineOffset), (-halfHeight + height * .05 + CLineOffset), .25) )
      .to(this.bottomLine1B, .6, tweenLayer(middleColor, (BLineOffset), (-halfHeight + height * .05 + BLineOffset)), BLineDelay )

    this.menuTLBottom2Layers
      .to(this.bottomLine2C, .5, tweenLayer(innerColor, -CLineOffset, (-halfHeight + height * .05 + CLineOffset), delay) )
      .to(this.bottomLine2B, .6, tweenLayer(middleColor, -BLineOffset, (-halfHeight + height * .05 + BLineOffset)), BLineDelay )
      .to(this.bottomLine2C, .5, tweenLayer(innerColor, (CLineOffset), (-halfHeight + height * .05 - CLineOffset), .25) )
      .to(this.bottomLine2B, .6, tweenLayer(middleColor, (BLineOffset), (-halfHeight + height * .05 - BLineOffset)), BLineDelay )
  }
  
  setMenuLinesPosition(screenSize) {    
    const menuLines = Array.from(this.menuLines.children);
    const {width, height} = screenSize;

    menuLines.forEach(line => {
      const lineClass = line.classList[1];

      switch(lineClass) {
        case "topLine1":
            TweenMax.set(line, {y: height * .92})
            console.log("topLine1");
            break;
        case "topLine2":
            TweenMax.set(line, {y: height * .92})
            console.log("topLine2");
            break;
        case "bottomLine1":
            TweenMax.set(line, {y: height * .95})
            console.log("bottomLine1");
            break;
        case "bottomLine2":
            TweenMax.set(line, {y: height * .95})
            console.log("bottomLine2");
            break;
        default:
            console.log('no match');
      }
    })
  }

  render() {
    const menuDivClass = classnames("menuDiv", {"overlay": this.state.menuOpen})
    const menuClass = classnames("menu", {"active": this.state.menuOpen})
    const menuLineClass = classnames("menuLines", { "hover": this.state.menuHover && !this.state.menuOpen })

    const menuTopLine1Class = classnames(menuLineClass, "topLine1")
    const menuTopLine2Class = classnames(menuLineClass, "topLine2")    
    const menuBottomLine1Class = classnames(menuLineClass, "bottomLine1")
    const menuBottomLine2Class = classnames(menuLineClass, "bottomLine2")

    return  (
      <div style={this.props.style} ref={c => this.menuDiv = c} className={menuDivClass} onMouseMove={this.handleMouseMove}>
        {/*<Menu menuLinesRef={c => this.menuLines = c} menuOpen={this.state.menuOpen} menuHover={this.state.menuHover}/>*/}
        <div ref={c => this.topLine1A = c} className={menuTopLine1Class}></div>
        <div ref={c => this.topLine1B = c} className={classnames(menuTopLine1Class, "layer")}></div>
        <div ref={c => this.topLine1C = c} className={classnames(menuTopLine1Class, "layer")}></div>

        <div ref={c => this.topLine2A = c} className={menuTopLine2Class}></div>
        <div ref={c => this.topLine2B = c} className={classnames(menuTopLine2Class, "layer")}></div>
        <div ref={c => this.topLine2C = c} className={classnames(menuTopLine2Class, "layer")}></div>

        <div ref={c => this.bottomLine1A = c} className={menuBottomLine1Class}></div>
        <div ref={c => this.bottomLine1B = c} className={classnames(menuBottomLine1Class, "layer")}></div>
        <div ref={c => this.bottomLine1C = c} className={classnames(menuBottomLine1Class, "layer")}></div>

        <div ref={c => this.bottomLine2A = c} className={menuBottomLine2Class}></div>
        <div ref={c => this.bottomLine2B = c} className={classnames(menuBottomLine2Class, "layer")}></div>
        <div ref={c => this.bottomLine2C = c} className={classnames(menuBottomLine2Class, "layer")}></div>

        <div className={menuClass} onClick={this.handleClick} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
          { this.state.menuOpen && <Contact handleLinkClick={this.handleLinkClick} /> }
        </div>

      </div>
    )
  }
}

const duration = 1200;
const FadeInContactContainer = FadeInWrapper(ContactContainer, duration);
export default FadeInContactContainer;

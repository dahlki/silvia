import React, { Component } from 'react';
import { TimelineMax, TweenMax } from 'gsap'
import classnames from 'classnames/bind';
import { default as options } from '../utils/animationContact';
import helpers from '../utils/helpers';

export default class MenuContainer extends Component {
	constructor(props) {
		super(props)

		/************ menu top lines *************/
    this.menuTLTop = new TimelineMax({paused:true, reversed:true});
    this.menuTLTop1Layers = new TimelineMax({paused:true, reversed:true})
    this.menuTLTop2Layers = new TimelineMax({paused:true, reversed:true})

    /************ menu bottom lines *************/
    this.menuTLBottom = new TimelineMax({paused:true, reversed:true});
    this.menuTLBottom1Layers = new TimelineMax({paused:true, reversed:true})
    this.menuTLBottom2Layers = new TimelineMax({paused:true, reversed:true})
  
	}

	render() {
		
    const menuLineClass = classnames("menuLines", { "hover": this.props.menuHover && !this.props.menuOpen })

    const menuTopLine1Class = classnames(menuLineClass, "topLine1")
    const menuTopLine2Class = classnames(menuLineClass, "topLine2")
    const menuBottomLine1Class = classnames(menuLineClass, "bottomLine1")
    const menuBottomLine2Class = classnames(menuLineClass, "bottomLine2")

		return(
			<div ref={this.props.menuLinesRef}>
				<div ref={c => this.topLine1A = c} className={menuTopLine1Class}></div>
	      <div ref={c => this.topLine1B = c} className={menuTopLine1Class}></div>
	      <div ref={c => this.topLine1C = c} className={menuTopLine1Class}></div>

	      <div ref={c => this.topLine2A = c} className={menuTopLine2Class}></div>
	      <div ref={c => this.topLine2B = c} className={menuTopLine2Class}></div>
	      <div ref={c => this.topLine2C = c} className={menuTopLine2Class}></div>

	      <div ref={c => this.bottomLine1A = c} className={menuBottomLine1Class}></div>
	      <div ref={c => this.bottomLine1B = c} className={menuBottomLine1Class}></div>
	      <div ref={c => this.bottomLine1C = c} className={menuBottomLine1Class}></div>

	      <div ref={c => this.bottomLine2A = c} className={menuBottomLine2Class}></div>
	      <div ref={c => this.bottomLine2B = c} className={menuBottomLine2Class}></div>
	      <div ref={c => this.bottomLine2C = c} className={menuBottomLine2Class}></div>
      </div>
		)
	}
}

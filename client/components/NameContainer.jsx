import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import classnames from 'classnames/bind';
import NameIcon from '../../public/assets/name-icon';


////// styles and animations  //////
const duration = 1200;
const defaultStyles = {
  transition: `opacity ${duration}ms ease-in`,
  opacity: 0,
  visibility: 'hidden',
  WebkitTransitionProperty: 'opacity',
  WebkitTransitionDuration: `${duration}ms`
};
const transitionStyles = {
  entering: { opacity: 0, visibility: 'hidden' },
  entered:  { opacity: 1, visibility: 'visible' }
};


//////  Container  //////
export default class NameContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLandingPage: props.pathname === '/',
      showName: false,
      pos: {left: 0, top: 0},
    }
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    this.setState({showName: true})
    this.props.getNameDiv(this.nameContainerRef);
    this.setState({pos:{...this.nameNode.getBoundingClientRect()}});
  }

  handleMouseMove(e) {
    this.setState({pos: {left: e.pageX,top: e.pageY}});
    let [moveX, moveY] = [(this.state.pos.left), (this.state.pos.top)];
    let nameNode = this.nameNode;
    // nameNode.style.transform = `translate(${moveX / 2}px, ${moveY / 2}px)`; rgba(222, 250, 223, .9)
    nameNode.style.textShadow = `${(window.innerWidth/2-moveX) /100}px ${(window.innerHeight/2-moveY) /100}px rgba(234,114,198,.5) `;
	}

  render() {
    const buttonStyle = classnames('buttonShowName', {'hide': this.state.showName || !this.state.isLandingPage});
    const name = 'silvia sonn'
    return (
      <div className="nameDiv" ref={c=>this.nameContainerRef=c} onMouseMove={this.handleMouseMove}>
        <Transition in={this.state.showName || !this.state.isLandingPage} timeout={duration}>
          {
            state => (
              <Link to='/home'>
                <FadeInName
                  nameRef={n => this.nameNode=n}
                  name={name}
                  className="name"
                  state={state}
                  defaultStyles={defaultStyles}
                  transitionStyles={transitionStyles}
                  />
              </Link>
            )
          }
        </Transition>
      </div>
    )
  }
}

const FadeInName = ({state, defaultStyles, transitionStyles, name, nameRef, ...props} ) => (
  <div {...props} ref={nameRef} style={{...defaultStyles, ...transitionStyles[state]}}>
    {name}
  </div>
)


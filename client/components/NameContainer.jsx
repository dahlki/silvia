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
      nameHeight: null,
      nameWidth: null
    }

  }

  componentDidMount() {
    // const nameHeight = this.nameRef.children[0].children[0].clientHeight;
    // const nameWidth = this.nameRef.children[0].children[0].clientWidth;
    this.setState({showName: true})
    this.props.nameDiv(this.nameRef);
  }

  render() {
    const buttonStyle = classnames('buttonShowName', {'hide': this.state.showName || !this.state.isLandingPage});

    return (
      <div className="nameDiv" ref={c=>this.nameRef=c}>
        <Transition in={this.state.showName || !this.state.isLandingPage} timeout={duration}>
          {
            state => (
              <Link to='/home'>
                <FadeInName
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

const FadeInName = ({state, defaultStyles, transitionStyles, ...props} ) => (
  <div {...props} style={{
      ...defaultStyles,
      ...transitionStyles[state]
    }}>
    silvia sonn
  </div>
)


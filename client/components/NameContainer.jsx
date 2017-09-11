// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Transition } from 'react-transition-group';
// import classnames from 'classnames/bind';


// ////// styles for transition animation  //////
// const duration = 1200;
// const defaultStyles = {
//   transition: `opacity ${duration}ms ease-in`,
//   opacity: 0,
//   visibility: 'hidden',
//   WebkitTransitionProperty: 'opacity',
//   WebkitTransitionDuration: `${duration}ms`
// };
// const transitionStyles = {
//   entering: { opacity: 0, visibility: 'hidden' },
//   entered:  { opacity: 1, visibility: 'visible' }
// };


// //////  container  //////
// export default class NameContainer extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isLandingPage: props.pathname === '/',
//       showName: false,
//       pos: {left: 0, top: 0},
//     }
//     this.handleMouseMove = this.handleMouseMove.bind(this);
//   }

//   componentDidMount() {
//     this.setState({showName: true})
//     this.setState({pos:{...this.nameNode.getBoundingClientRect()}});
//     this.props.getNameDiv(this.nameNode);
//   }

//   handleMouseMove(e) {
//     this.setState({pos: {left: e.pageX,top: e.pageY}});
//     const [moveX, moveY] = [this.state.pos.left, this.state.pos.top];
//     const nameNode = this.nameNode;
//     const nameNodeBounds = nameNode.getBoundingClientRect()
//     let x = (window.innerWidth/2-moveX) /120;
//     let y = (window.innerHeight/2-moveY) /70;

//     // if (moveX > nameNodeBounds.left && moveX < nameNodeBounds.right && moveY > nameNodeBounds.top && moveY < nameNodeBounds.bottom) {
//     //   x -= 2.5;
//     //   y -= 2.5;
//     // }
//     // nameNode.style.transform = `translate(${moveX / 2}px, ${moveY / 2}px)`; rgba(222, 250, 223, .9)
//     nameNode.style.textShadow = `${x-=2}px ${y-=2}px rgba(234,114,198,.5) `;
//   }

//   render() {
//     const name = 'silvia sonn'
//     return (
//       <div className="nameDiv" ref={c=>this.nameContainerRef=c} onMouseMove={this.handleMouseMove}>
//         <Transition 
//           in={this.state.showName || !this.state.isLandingPage} 
//           timeout={{enter:duration, exit:duration}} 
//         >
//         {
//           state => (
            
//             <FadeInName
//               onMouseOver={this.props.onMouseOver}
//               onMouseLeave={this.props.onMouseLeave}
//               nameRef={n => this.nameNode=n}
//               name={name}
//               className="name"
//               state={state}
//               defaultStyles={defaultStyles}
//               transitionStyles={transitionStyles}
//               onClick={this.props.onClick}
//             />
            
//           )
//         }
//         </Transition>
//       </div>
//     )
//   }
// }

// const FadeInName = ({state, defaultStyles, transitionStyles, name, nameRef, ...props} ) => (
//   <div {...props} ref={nameRef} style={{...defaultStyles, ...transitionStyles[state]}}>
//     {name}
//   </div>
// )


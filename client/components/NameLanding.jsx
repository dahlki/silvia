import React, { Component } from 'react';
import classnames from 'classnames/bind';
import FadeInWrapper from './FadeInWrapper';


//////  container  //////
class NameContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showName: false,
      pos: {left: 0, top: 0},
    }
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    this.setState({showName: true})
    // this.setState({pos:{...this.nameNode.getBoundingClientRect()}});
    this.props.getNameDiv(this.nameNode);
  }

  handleMouseMove(e) {
    this.setState({pos: {left: e.pageX,top: e.pageY}});
    const [moveX, moveY] = [this.state.pos.left, this.state.pos.top];
    const nameNode = this.nameNode;
    const nameNodeBounds = nameNode.getBoundingClientRect()
    let x = (window.innerWidth/2-moveX) /120;
    let y = (window.innerHeight/2-moveY) /70;
    nameNode.style.textShadow = `${x-=2}px ${y-=2}px rgba(234,114,198,.5) `;
  }

  render() {
    const name = 'silvia sonn'
    return (
      <div className="nameDiv" ref={c=>this.nameContainerRef=c} onMouseMove={this.handleMouseMove}>
          <Name
            name={name}
            style={this.props.style}
            onMouseOver={this.props.onMouseOver}
            onMouseLeave={this.props.onMouseLeave}
            nameRef={n => this.nameNode=n}
            className="name"
            onClick={this.props.onClick}
          />
      
      </div>
    )
  }
}
const Name = ({name, nameRef, style, ...props} ) => (
  <div {...props} ref={nameRef} style={style}>
    {name}
  </div>
)

const duration = 1000;
const FadeInName = FadeInWrapper(NameContainer, duration);
export default FadeInName;


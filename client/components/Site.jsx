import React, { Component } from 'react';
import Landing from './Landing';
import TransitionContainer from './TransitionContainer';
import Home from './Home';


export default class Site extends Component {
  constructor() {
    super()

    this.state = {
      showLanding: false,
      startTransition: false,
      showHome: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleTransition = this.handleTransition.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    this.setState({showLanding:true});
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({startTransition:true});
  }

  handleTransition() {
    this.setState({showHome:true});
  }

  handlePageChange() {
    this.setState({startTransition:false, showLanding:false});
  }

  render () {

    const { showLanding, showHome, startTransition } = this.state;

    return (
      <div>
        {
          showLanding && !showHome ?
          <Landing
            path={this.props.match.path}
            nameClick={this.handleClick}
          /> 
          : null
        }
        {
          startTransition ?
          <TransitionContainer
            handleTransition={this.handleTransition}
            handlePageChange={this.handlePageChange}
          /> 
          : null 
        }
        {
          showHome ? <Home/> : null
        }
      </div>
    )
  }
}


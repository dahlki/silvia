import React, { Component } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup'
import styled, { injectGlobal }  from 'styled-components'
import Name from './NameContainer';
import Home from './Home';
import Site from './Site';

injectGlobal`
  html, body {
    box-sizing: border-box;
	  height: 100vh;
	  width: 100vw;
	  margin: 0px;
	  background-color: #F9E3E9;
	  overflow: hidden;
	  position: absolute;
	  font-size: 12px;
	  background-attachment: fixed;
	  background-size: 100% 100%;
		background-position: center;
  }
`;

export default class App extends Component {

	render() {

		const firstChild = props => {
		  const childrenArray = React.Children.toArray(props.children);
		  return childrenArray[0] || null;
		};

	  return (
	    <div className='app'>
		    <Route render={({location}) => (
			    <Switch>
			      <Route exact path='/' children={({ match, ...rest }) => (
					    <TransitionGroup component={firstChild}>
					      {match && <Site match={match} {...rest} />}
					    </TransitionGroup>
							)}
			      />
			     </Switch>
	      )}/>
	    </div>
	  )
	}
}

import React, { Component } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup'
import Name from './NameContainer';
import Home from './Home';
import Site from './Site';


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

import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import Name from './NameContainer';
import Site from './Site';
import Landing from './Landing';

const App = () => {

  return (
    <div className='app'>
      <Route exact path='/' component = { Landing } />
      <Route exact path='/home' component={ Site }/>
    </div>
  )
}

export default App;
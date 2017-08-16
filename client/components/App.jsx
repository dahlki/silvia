import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import Name from './Name';

const App = () => {

  return (
    <div className='app'>
      <Route>
        <Name>

        </Name>
      </Route>
    </div>
  )
}

export default App;
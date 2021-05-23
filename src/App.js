import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Homepage from './pages/homepage/Homepage.component'
import HatsPage from './pages/hats/HatsPage.component.jsx'

import './App.css';

function App() {
  return (
    <>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop/hats' component={HatsPage} />
      </Switch>
      
    </>
  );
}

export default App;
 

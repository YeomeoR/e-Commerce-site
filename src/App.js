import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Homepage from './pages/homepage/Homepage.component'
import ShopPage from './pages/shop/Shop.component.jsx'

import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
 

import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Homepage from './pages/homepage/Homepage.component'
import ShopPage from './pages/shop/Shop.component.jsx'
import Header from './components/header/header.component'

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
 

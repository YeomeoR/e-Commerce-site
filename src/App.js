import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shop.component.jsx';
import Header from './components/header/header.component';
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  // the function that will be called to unsubscribe
  // within componentWillUnmount(). It's in 'this' class
  // so when it's defined in componentWillUnmount, we 
  // reference 'this.' in front of the function call.
  unsubscribeFromAuth = null;

  // fired on each re-rendering of the page
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      // checking that there is a user logged in
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // here we instantiate userRef and call the method 'onSnapshot' on it.
        // what we get back is the snapshot data. 
        // we then set the state to the snapshot data with the id and call .data() on
        //  the snapshot in order to see the data we need therefore setting a new object of the data.
        // basically listening for any changes and updating and setting the data.
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({currentUser: userAuth})
      }
      // console.log(user); 
      // this shows the whole Google object
      // --interesting!
      
      

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;

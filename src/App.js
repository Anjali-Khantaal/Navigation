import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyBMDoUSjsx7vUSP5UwNYTqiehP1KdO_Vj0',
    authDomain: 'manager-80f25.firebaseapp.com',
    databaseURL: 'https://manager-80f25.firebaseio.com',
    projectId: 'manager-80f25',
    storageBucket: 'manager-80f25.appspot.com',
    messagingSenderId: '548802742853'
  };
  firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyC4jYErOvbdMaTsdNqBGBZw6_uH-jCSjis',
    authDomain: 'manager-990fc.firebaseapp.com',
    databaseURL: 'https://manager-990fc.firebaseio.com',
    projectId: 'manager-990fc',
    storageBucket: 'manager-990fc.appspot.com',
    messagingSenderId: '988050495170'
  };
  firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

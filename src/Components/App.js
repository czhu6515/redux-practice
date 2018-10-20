import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store, { history } from '../store'
import { Router, Route } from 'react-router-dom'
import Library from './Library'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Library />
        </Router>
      </Provider>
    )
     
  }
}

export default App;

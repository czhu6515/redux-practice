import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store, { history } from '../store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>Redux Practice!</h1>
      </Provider>
    )
     
  }
}

export default App;

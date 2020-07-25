import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Screen1 from './Screens/Screen1';

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <Screen1 />
      </Provider>
    )
  }
}
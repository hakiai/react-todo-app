// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Main from './components/Main';
import reducer from './reducers/reducer';

const store = createStore(reducer);
const root: any = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  root
);

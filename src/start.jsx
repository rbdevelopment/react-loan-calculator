import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import reducer from './logic/reducer';
import App from './components/App';

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

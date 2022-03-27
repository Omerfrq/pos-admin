import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

const baseURL =
  window.location.hostname === 'localhost'
    ? 'https://point-of-sale-v1.herokuapp.com/api'
    : 'https://point-of-sale-v1.herokuapp.com/api';

if (process.env.API) axios.defaults.baseURL = process.env.API;
else axios.defaults.baseURL = baseURL;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById('root')
);

serviceWorker.unregister();

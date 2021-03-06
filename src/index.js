import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createHashHistory } from 'history';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './core/store/configureStore';
import App from './components/App';

import './assets/css/style.css';

injectTapEventPlugin();

const store = configureStore();
const history = createHashHistory();

function startApp() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app'),
  );
}

if (window.cordova) {
  document.addEventListener('deviceready', () => startApp(), false);
} else {
  startApp();
}

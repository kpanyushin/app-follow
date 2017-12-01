import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let _renderApp = () => {
  return (<App />)
}

render(
  <Provider store={store}>
    {_renderApp()}
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

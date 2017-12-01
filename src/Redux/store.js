import { createStore, compose, applyMiddleware } from 'redux';
import { install } from 'redux-loop';
import thunk from 'redux-thunk';
import { Map } from 'immutable';

import reducers from './reducers';

const enhancer = compose(
  applyMiddleware(thunk),
  install()
);

const store = createStore(
  reducers,
  Map({}),
  enhancer
);

export default store;

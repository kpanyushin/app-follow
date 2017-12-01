import { combineReducers } from 'redux-loop';
import { Map } from 'immutable';

import ModalState from './reducers/ModalState';

const reducers = {
  modal: ModalState
};

const initialState = Map();
const getItem = (child, key) => child.get(key);
const setItem = (child, key, value) => child.set(key, value);

export default combineReducers(
  reducers,
  initialState,
  getItem,
  setItem
);

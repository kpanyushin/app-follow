import { fromJS } from 'immutable';
import { createAction, createReducer } from 'redux-act';

const initialState = fromJS({
  isOpen: false
});

export const set = createAction('modal/SET', (isOpen) => ({isOpen}))

export default createReducer({
  [set]: (state, payload) => state.set('isOpen', payload.isOpen),
  [setData]: (state, payload) => state.set('data', payload.data),
  [clearData]: (state) => state.set('data', fromJS({}))
}, initialState);

import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { notifyReducer } from './notifyReducer';
export const reducers = combineReducers({
  auth: authReducer,
  notify: notifyReducer,
});

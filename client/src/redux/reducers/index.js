import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { alertReducer } from './alertReducer';
export const reducers = combineReducers({
  auth: authReducer,
  alert: alertReducer,
});

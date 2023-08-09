import { TYPES } from '../types';

const initialState = {};

export const notifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.NOTIFY:
      console.log(action);
      return action.payload;
    default:
      return state;
  }
};

import { GLOBALTYPES } from '../types';

const initialState = {};

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.ALERT:
      console.log(action);
      return action.payload;
    default:
      return state;
  }
};

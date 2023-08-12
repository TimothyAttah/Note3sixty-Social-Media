import { GLOBALTYPES } from '../types';

const initialState = {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.AUTH:
      console.log(action);
      return action.payload;
    default:
      return state;
  }
};

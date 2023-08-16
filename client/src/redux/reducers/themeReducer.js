import { GLOBALTYPES } from '../types';

const initialState = false;

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.THEME:
      console.log(action);
      return action.payload;
    default:
      return state;
  }
};

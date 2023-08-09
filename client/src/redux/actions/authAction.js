import { TYPES } from '../types';
import { postDataAPI } from '../../utils/fetchData';

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.NOTIFY, payload: { loading: true } });
    const res = await postDataAPI('login', data);
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
};

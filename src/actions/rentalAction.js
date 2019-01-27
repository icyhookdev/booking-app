import { GET_RENTALS } from './types';
import rentals from '../api/rentals';

export const getRentals = () => async dispatch => {
  const res = await rentals.get('/');

  dispatch({ type: GET_RENTALS, payload: res.data });
};

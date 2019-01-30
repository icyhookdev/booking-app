import { GET_RENTALS, GET_RENTAL } from './types';
import rentals from '../api/rentals';

export const getRentals = () => async dispatch => {
  const res = await rentals.get('/');

  dispatch({ type: GET_RENTALS, payload: res.data });
};

export const getRental = id => async dispatch => {
  const res = await rentals.get(`/${id}`);

  dispatch({ type: GET_RENTAL, payload: res.data });
};

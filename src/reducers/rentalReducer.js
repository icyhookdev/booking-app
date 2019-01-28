import { GET_RENTALS } from '../actions/types';

const initialState = {
  rentals: [],
  rental: {},
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RENTALS:
      return { ...state, rentals: action.payload, loading: false };
    default:
      return state;
  }
};

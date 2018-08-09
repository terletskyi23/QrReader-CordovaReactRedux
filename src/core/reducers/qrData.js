import * as types from '../types';

const initialState = {
  data: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_DATA:
      return {...state, data: action.payload};
    case types.RESET_DATA:
      return {...state, data: ''};
    default:
      return state;
  }
};

export default reducer;
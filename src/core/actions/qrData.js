import * as types from '../types';

export const setData = data => ({
  type: types.SET_DATA,
  payload: data,
});

export const resetData = () => ({
  type: types.RESET_DATA,
});

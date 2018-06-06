import { LOADER } from './actionTypes';

const initialState = {loader: false};

export const loaderState = (state = initialState, action) => {
  switch (action.type) {
    case LOADER.SHOW:
      return true;
    case LOADER.HIDE:
      return false;
    default: 
      return state;
  }
};
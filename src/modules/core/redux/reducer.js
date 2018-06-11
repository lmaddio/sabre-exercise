import { LOADER } from './actionTypes';

const initialState = {loader: false};

export const loaderState = (state = initialState, action) => {
  switch (action.type) {
    case LOADER.SHOW:
      return {loader: true};
    case LOADER.HIDE:
      return {loader: false};
    default: 
      return state;
  }
};
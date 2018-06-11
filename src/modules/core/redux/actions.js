import { LOADER } from './actionTypes';

// LOADER ACTIONS
export const showLoader = () => ({
  type: LOADER.SHOW
});
export const hideLoader = () => ({
  type: LOADER.HIDE
});
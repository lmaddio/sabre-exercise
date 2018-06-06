import { createSelector } from 'reselect';

const getLoader = (state) => state.loaderState;

export const getLoaderState = createSelector(
  [ getLoader ],
  loader => !loader
)
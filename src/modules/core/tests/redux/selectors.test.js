import { createSelector } from 'reselect';

import * as selectors from '../../redux/selectors';

describe('Selector tests', () => {
  it('Selector return true', () => {
    expect(
      selectors.getLoaderState({ loaderState: { loader: true } })
    )
    .toEqual({ loader: true })
  });
  it('Selector return false', () => {
    expect(
      selectors.getLoaderState({ loaderState: { loader: false } })
    )
    .toEqual({ loader: false })
  });
  it('Selector should\'t run', () => {
    expect(
      selectors.getLoaderState({})
    )
    .toEqual(undefined)
  });
});
import configureMockStore from 'redux-mock-store'
import * as constants from '../../redux/constants'
import * as types from '../../redux/actionTypes'

const mockStore = configureMockStore();

const LOADER_ACTIONS = {
  SHOW: [constants.NAME, "LOADER_SHOW"].join("/"),
  HIDE: [constants.NAME, "LOADER_HIDE"].join("/")
};

describe('Actions Types definitions', () => {
  it('Loader SHOW', () => {
    const initialState = {};

    expect(types.LOADER.SHOW).toEqual(LOADER_ACTIONS.SHOW);

    expect(types.LOADER.HIDE).toEqual(LOADER_ACTIONS.HIDE);
  });
});
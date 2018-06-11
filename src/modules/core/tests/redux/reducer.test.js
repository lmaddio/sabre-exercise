import configureMockStore from 'redux-mock-store'
import * as reducer from '../../redux/reducer'
import * as actionTypes from '../../redux/actionTypes'

describe('Loader reducer', () => {
  it('Should return the initial state', () => {
    const initialState = {};
    expect(reducer.loaderState(undefined, initialState)).toEqual({
      loader: false
    })
  });
  it('Should return the initial state', () => {
    const initialState = reducer.loaderState(undefined, {
      type: actionTypes.LOADER.SHOW
    });
    expect(initialState).toEqual({
      loader: true
    })
  });
});
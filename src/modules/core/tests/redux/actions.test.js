import configureMockStore from 'redux-mock-store';
import * as actions from '../../redux/actions';
import * as types from '../../redux/actionTypes';

const mockStore = configureMockStore();

describe('Loader Actions', () => {
  it('Set Loader by redux action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    store.dispatch(actions.showLoader());
    let storeActions = store.getActions();
    const expectedResult = [{
      type: types.LOADER.SHOW
    }];
    expect(storeActions).toEqual(expectedResult);

    store.dispatch(actions.hideLoader());
    storeActions = store.getActions();
    expectedResult.push({
      type: types.LOADER.HIDE
    });
    expect(storeActions).toEqual(expectedResult);
  });
});
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as constants from '../../redux/constants';
import * as actions from '../../redux/actions';
import * as types from '../../redux/actionTypes';

import * as utils from '../../utils';

import core from '../../../core';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const TEST_DATA = [ 
  {
    "contractUntil" : "2012-06-30",
    "dateOfBirth" : "1990-05-13",
    "jerseyNumber" : 9,
    "name" : "Romelu Lukaku",
    "nationality" : "Belgium",
    "position" : "Centre-Forward"
  }
];

const initialState = {};
describe('Players Actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  });
  it('Tests Players redux actions', () => {
    const store = mockStore(initialState);

    store.dispatch(actions.startRequestPlayers());
    let storeActions = store.getActions();
    const expectedResult = [{
      type: types.GET_PLAYERS.PENDING
    }];
    expect(storeActions).toEqual(expectedResult);

    store.dispatch(actions.errorRequestPlayers());
    storeActions = store.getActions();
    expectedResult.push({
      type: types.GET_PLAYERS.ERROR
    });
    expect(storeActions).toEqual(expectedResult);

    store.dispatch(actions.successRequestPlayers());
    storeActions = store.getActions();
    expectedResult.push({
      type: types.GET_PLAYERS.SUCCESS
    });
    expect(storeActions).toEqual(expectedResult);
  });
  it('Tests Players by redux function', ()=> {
    fetchMock
      .getOnce(constants.PLAYERS_URL, { body: TEST_DATA, headers: { 'content-type': 'application/json' } });

    const expectedActions = [{
      ...core.actions.showLoader()
    }, {
      type: types.GET_PLAYERS.PENDING
    }, {
      ...core.actions.hideLoader()
    }, {
      payload: utils.formatPlayersData(TEST_DATA),
      type: types.GET_PLAYERS.SUCCESS
    }];

    const store = mockStore(initialState);

    return store.dispatch(actions.getPlayers()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    });
  });
  it('Tests Players wrong error by redux function', ()=> {
    fetchMock
      .getOnce(constants.PLAYERS_URL, { throws: "Some kind of error" });

    const expectedActions = [{
      ...core.actions.showLoader()
    }, {
      type: types.GET_PLAYERS.PENDING
    }, {
      ...core.actions.hideLoader()
    }, {
      error: constants.FETCH_GENERIC_ERROR,
      type: types.GET_PLAYERS.ERROR
    }];

    const store = mockStore(initialState);

    return store.dispatch(actions.getPlayers()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    });
  });

  it('Tests Players normal error by redux function', ()=> {
    const ERROR = "FAIL";
    fetchMock
      .getOnce(constants.PLAYERS_URL, { throws: new Error(ERROR) });

    const expectedActions = [{
      ...core.actions.showLoader()
    }, {
      type: types.GET_PLAYERS.PENDING
    }, {
      ...core.actions.hideLoader()
    }, {
      error: ERROR,
      type: types.GET_PLAYERS.ERROR
    }];

    const store = mockStore(initialState);

    return store.dispatch(actions.getPlayers()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    });
  });
  // INPUTS VALUES
  it('Set inputs values', () =>{
    const store = mockStore(initialState);
    let inputState = {name: "Romelu"};
    store.dispatch(actions.setInputState(inputState));
    let storeActions = store.getActions();
    const expectedResult = [{
      type: types.INPUTS_PLAYERS.SET_INPUT_VALUE,
      payload: inputState
    }];
    expect(storeActions).toEqual(expectedResult);

    inputState = {};
    store.dispatch(actions.setInputState(inputState));
    storeActions = store.getActions();
    expectedResult.push({
      type: types.INPUTS_PLAYERS.SET_INPUT_VALUE,
      payload: inputState
    });
    expect(storeActions).toEqual(expectedResult);

    inputState = null;
    store.dispatch(actions.setInputState(inputState));
    storeActions = store.getActions();
    expectedResult.push({
      type: types.INPUTS_PLAYERS.SET_INPUT_VALUE,
      payload: inputState
    });
    expect(storeActions).toEqual(expectedResult);
  }); 
  it('Set input values by a function', ()=> {
    const store = mockStore(initialState);
    store.dispatch(actions.setInputState());
    let storeActions = store.getActions();
    const expectedResult = [{
      type: types.INPUTS_PLAYERS.SET_INPUT_VALUE,
      payload: undefined
    }];
    expect(storeActions).toEqual(expectedResult);

    const inputState = { name: "Romelu" };
    store.dispatch(actions.setInputState(inputState));
    storeActions = store.getActions();
    expectedResult.push({
      type: types.INPUTS_PLAYERS.SET_INPUT_VALUE,
      payload: inputState
    });
    expect(storeActions).toEqual(expectedResult);

    store.dispatch(actions.setInputState(null));
    storeActions = store.getActions();
    expectedResult.push({
      type: types.INPUTS_PLAYERS.SET_INPUT_VALUE,
      payload: null
    });
    expect(storeActions).toEqual(expectedResult);
  });
  // FILTERS VALUES
  it('Test filters actions', ()=>{
    const store = mockStore(initialState);
    let inputState = {name: "Romelu"};
    // Test don't use arguments
    store.dispatch(actions.clearFilters(inputState));
    let storeActions = store.getActions();
    const expectedResult = [{
      type: types.FILTER_PLAYERS.CLEAR_FILTERS
    }];
    expect(storeActions).toEqual(expectedResult);

    // inputState = {};
    store.dispatch(actions.setFiltersValue(inputState));
    storeActions = store.getActions();
    expectedResult.push({
      type: types.FILTER_PLAYERS.SET_FILTERS,
      payload: inputState
    });
    expect(storeActions).toEqual(expectedResult);

    inputState = {age: 25};
    store.dispatch(actions.setFiltersValue(inputState));
    storeActions = store.getActions();
    expectedResult.push({
      type: types.FILTER_PLAYERS.SET_FILTERS,
      payload: inputState
    });
    expect(storeActions).toEqual(expectedResult);

    // Clean filters agaian
    store.dispatch(actions.clearFilters());
    storeActions = store.getActions();
    expectedResult.push({
      type: types.FILTER_PLAYERS.CLEAR_FILTERS
    });
    expect(storeActions).toEqual(expectedResult);
  });
  it('Set Filters actions by function', ()=> {
    const store = mockStore(initialState);
    store.dispatch(actions.setFilters());
    let storeActions = store.getActions();
    const expectedResult = [{
      type: types.FILTER_PLAYERS.CLEAR_FILTERS
    }];
    expect(storeActions).toEqual(expectedResult);

    const inputState = { name: "Romelu" };
    store.dispatch(actions.setFilters(inputState));
    storeActions = store.getActions();
    expectedResult.push({
      type: types.FILTER_PLAYERS.SET_FILTERS,
      payload: inputState
    });
    expect(storeActions).toEqual(expectedResult);

    store.dispatch(actions.setFilters(null));
    storeActions = store.getActions();
    expectedResult.push({
      type: types.FILTER_PLAYERS.CLEAR_FILTERS
    });
    expect(storeActions).toEqual(expectedResult);
  });
});
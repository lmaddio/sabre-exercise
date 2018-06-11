import configureMockStore from 'redux-mock-store';
import * as reducer from '../../redux/reducer';
import * as actionTypes from '../../redux/actionTypes';

describe('Players request reducer', () => {
  it('Should return the initial state', () => {
    const initialState = {};
    expect(reducer.playersReqData(undefined, initialState)).toEqual({})
  });
  it('Should return the pending state', () => {
    const initialState = reducer.playersReqData(undefined, {
      type: actionTypes.GET_PLAYERS.PENDING
    });
    expect(initialState).toEqual({
      checkIn: true
    });
  });
  it('Should return the success state', () => {
    const newState = reducer.playersReqData({checkIn: true}, {
      type: actionTypes.GET_PLAYERS.SUCCESS,
      payload: []
    });
    expect(newState).toEqual({
      data: []
    });
  });
  it('Should return an error state', () => {
    const newState = reducer.playersReqData({checkIn: true}, {
      type: actionTypes.GET_PLAYERS.ERROR,
      error: "FAILED"
    });
    expect(newState).toEqual({
      error: "FAILED"
    });
  });
});

describe('Players inputs and filters reducer', ()=>{
  const TEST_OBJ = { name: "Ronaldo" };
  it('Inputs players, typing', ()=>{
    let newState = reducer.playersInputData({}, {
      type: actionTypes.INPUTS_PLAYERS.SET_INPUT_VALUE,
      payload: TEST_OBJ
    });
    expect(newState).toEqual(TEST_OBJ);

    newState = reducer.playersInputData({}, {
      type: actionTypes.INPUTS_PLAYERS.CLEAR_INPUT_VALUES
    });
    expect(newState).toEqual({});
  });
  it('Players filters', ()=>{
    let newState = reducer.playersFilters({}, {
      type: actionTypes.FILTER_PLAYERS.CLEAR_FILTERS
    });
    expect(newState).toEqual({});

    newState = reducer.playersFilters({}, {
      type: actionTypes.FILTER_PLAYERS.SET_FILTERS,
      payload: TEST_OBJ
    });
    expect(newState).toEqual(TEST_OBJ);

    newState = reducer.playersFilters({}, {
      type: actionTypes.FILTER_PLAYERS.CLEAR_FILTERS
    });
    expect(newState).toEqual({});
  });
});
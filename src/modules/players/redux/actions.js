import { GET_PLAYERS, FILTER_PLAYERS, INPUTS_PLAYERS } from './actionTypes';
import { getPlayersData } from './services';
import core from '../../core';
import { formatPlayersData } from '../utils';
import { FETCH_GENERIC_ERROR } from './constants';

// REQUEST PLAYERS DATA
export const startRequestPlayers = () => ({
  type: GET_PLAYERS.PENDING
});
export const errorRequestPlayers = (error) => ({
  type: GET_PLAYERS.ERROR,
  error
});
export const successRequestPlayers = (data) => ({
  type: GET_PLAYERS.SUCCESS,
  payload: data
});
export function getPlayers() {
  return async dispatch => {
    // Set REQUEST state
    dispatch(core.actions.showLoader());
    // Show Loader
    dispatch(startRequestPlayers());
    // Get data
    const {data, error} = await getPlayersData();
    // Hide loader
    dispatch(core.actions.hideLoader());
    return dispatch(
      !data 
      ? errorRequestPlayers(error  || FETCH_GENERIC_ERROR) 
      : successRequestPlayers(formatPlayersData(data))
    );
  };
};

// MANAGE INPUT STATES
const setInputPlayersValue = (data) => ({
  type: INPUTS_PLAYERS.SET_INPUT_VALUE,
  payload: data
});
export function setInputState(props) {
  return dispatch => 
    dispatch(setInputPlayersValue(props))
}

// MANAGE FILTERS FOR PLAYERS
export const clearFilters = () => ({
  type: FILTER_PLAYERS.CLEAR_FILTERS
});
export const setFiltersValue = (data) => ({
  type: FILTER_PLAYERS.SET_FILTERS,
  payload: data
});
export function setFilters(props) {
  return dispatch =>
    dispatch(props ? setFiltersValue(props) : clearFilters())
}

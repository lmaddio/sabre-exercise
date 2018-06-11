import { GET_PLAYERS, FILTER_PLAYERS, INPUTS_PLAYERS } from './actionTypes';

const initialState = {};

export const playersReqData = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAYERS.PENDING:
      return {
        checkIn: true
      };
    case GET_PLAYERS.ERROR:
      return { error: action.error };
    case GET_PLAYERS.SUCCESS:
      return { data: action.payload };
    default: 
      return state;
  }
};

export const playersInputData = (state = initialState, action) => {
  const {type, payload={}} = action;
  switch (type) {
    case INPUTS_PLAYERS.SET_INPUT_VALUE:
      return {...state, ...payload};
    case INPUTS_PLAYERS.CLEAR_INPUT_VALUES:
      return {};
    default: 
      return state;
  }
}

export function playersFilters(state = initialState, action) {
  switch (action.type) {
    case FILTER_PLAYERS.SET_FILTERS:
      return {...action.payload};
    case FILTER_PLAYERS.CLEAR_FILTERS:
      return {};
    default: 
      return state;
  }
}
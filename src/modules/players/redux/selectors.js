import { createSelector } from 'reselect';

import { transformPositionName2Id } from '../utils';

const getPlayers = (state) => state.playersReqData;
const getFilters = (state) => state.playersFilters;

export const getVisiblePlayers = createSelector(
  [ getPlayers, getFilters ],
  (players, filters) => {
    if(Object.keys(filters).length === 0)
      return players.data || [];
    const _players = players.data.filter(p => {
      for (const [key, value] of Object.entries(filters)) {
        let _pValue = p[key];
        if(key === "position")
          _pValue = transformPositionName2Id(_pValue);
        if(_pValue !== value)
          return false;
      }
      return true;
    });
    return _players;
  }
)

const getInputs = (state) => state.playersInputData;

export const getInputsValues = createSelector(
  [ getInputs ],
  (inputs) => {
    return inputs;
  }
)
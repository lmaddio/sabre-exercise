import { createSelector } from 'reselect';

import { transformPositionName2Id } from '../utils';

const getPlayers = (state) => state.playersReqData;
const getFilters = (state) => state.playersFilters;

export const getVisiblePlayers = createSelector(
  [ getPlayers, getFilters ],
  (players, filters) => {
    const entries = Object.entries(filters).filter(([k,v={}])=>v.value).map(([k,v])=>[k, v.value.toLowerCase()]);
    if(entries.length === 0)
      return players.data ? players.data.map(a=>Object.values(a)) : [];

    const _players = players.data.filter(p => {
      for (let [key, value] of entries) {
        let _pValue = p[key];
        if(key === "position")
          _pValue = transformPositionName2Id(_pValue);
        _pValue = _pValue.toLowerCase();
        // Check if match some part of the string ?
        // Comment this two line so the comparation will be by all the string
        if(key === "name")
          return _pValue.search(value) !== -1;
        if(value && (_pValue !== value))
          return false;
      }
      return true;
    });
    return _players ? _players.map(a=>Object.values(a)) : [];
  }
)

const getInputs = (state) => state.playersInputData;

export const getInputsValues = createSelector(
  [ getInputs ],
  (inputs={}) => {
    const buttonDisabled = Object.entries(inputs).some(([key, value])=>
      value.state === false
    );
    return {...inputs, buttonDisabled};
  }
)
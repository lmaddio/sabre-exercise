import { defineAction } from 'redux-define';
import { NAME } from './constants';
import {  
  ERROR, 
  PENDING, 
  SUCCESS,
  SET_INPUT_VALUE,
  CLEAR_INPUT_VALUES,
  SET_FILTERS,
  CLEAR_FILTERS,
} from './stateConstants';

export const GET_PLAYERS = defineAction('GET_PLAYERS',
  [ERROR, PENDING, SUCCESS], NAME);

export const FILTER_PLAYERS = defineAction('FILTER_PLAYERS', [SET_FILTERS, CLEAR_FILTERS], NAME);

export const INPUTS_PLAYERS = defineAction('INPUTS_PLAYERS', [SET_INPUT_VALUE, CLEAR_INPUT_VALUES], NAME);
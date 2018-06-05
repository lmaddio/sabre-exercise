import { defineAction } from 'redux-define';
import { NAME } from './constants';
import { CANCELLED, ERROR, PENDING, SUCCESS } from './stateConstants';

export default defineAction('GET_PLAYERS',
  [CANCELLED, ERROR, PENDING, SUCCESS], NAME);
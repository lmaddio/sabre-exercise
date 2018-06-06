import { defineAction } from 'redux-define';
import { NAME } from './constants';
import {  
  SHOW, 
  HIDE
} from './stateConstants';

export const LOADER = defineAction('LOADER',
  [SHOW, HIDE], NAME);
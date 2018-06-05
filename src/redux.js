import { combineReducers } from 'redux';
import players from './modules/players';

export default combineReducers({
  [players.constants.NAME]: players.reducer
});
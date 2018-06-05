import { 
  createStore, 
  applyMiddleware, 
  compose, 
  combineReducers 
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {constants, reducer} from './players';

const rootReducer = combineReducers({
  [constants.NAME]: reducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
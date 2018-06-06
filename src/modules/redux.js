import { 
  createStore, 
  applyMiddleware, 
  compose, 
  combineReducers 
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import players from './players';

const reducers = {};
Object.entries(players.reducers).forEach(([key, value])=>{
  reducers[key] = value;
});

const rootReducer = combineReducers(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
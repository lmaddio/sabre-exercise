import GET_PLAYERS from './actionTypes';

const initialState = {};

export default function playerReducer(state = initialState, action) {
  console.log("players reducer", "state", state, "action", action);

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
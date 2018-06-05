import GET_PLAYERS from './actionTypes';
import { getPlayersData } from './services';

const startRequestPlayers = () => ({
  type: GET_PLAYERS.PENDING
});

const errorRequestPlayers = (error) => ({
  type: GET_PLAYERS.ERROR,
  error
});

const successRequestPlayers = (data) => ({
  type: GET_PLAYERS.SUCCESS,
  payload: data
});

export function getPlayers() {
  return async dispatch => {
    // Set REQUEST state
    dispatch(startRequestPlayers());
    // Get data
    const {data, error} = await getPlayersData();
    console.log('getPlayersData', data, error);
    return dispatch(
      !data 
      ? errorRequestPlayers(error  || "Failed to fetch") 
      : successRequestPlayers(data)
    );
  };
};
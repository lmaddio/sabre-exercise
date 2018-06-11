import { PLAYERS_URL } from './constants';

export async function getPlayersData(){
  try {
    const data = await fetch(PLAYERS_URL);
    return {data: await data.json()};
  }
  catch(e) {
    return {error: e.message}
  }
};
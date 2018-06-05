const PLAYERS_URL = "https://football-players-b31f2.firebaseio.com/players.json?print=pretty";

export async function getPlayersData(){
  try {
    const data = await fetch(PLAYERS_URL);
    return {data: await data.json()};
  }
  catch(e) {
    return {error: e.message}
  }
};
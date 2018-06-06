import {v4} from 'uuid';

// TABLE
export const TABLE_COLUMNS = [ "player", "position", "team", "age" ].map(a=>({text: a, key:v4()}));
export const PLAYERS_ARRAY_POSITIONS = ['Attacking Midfield','Central Midfield','Centre-Back','Centre-Forward','Defensive Midfield','Keeper','Left Midfield','Left Wing','Left-Back', 'Right-Back'];
// SELECT FIELD FROM TABLE
// Couln't make it work like this
// export const PLAYERS_POSITIONS = PLAYERS_ARRAY_POSITIONS.reduce((a, n)=>({
//   typeof a === "string" ? {[a.replace(" ","")]: a} : ...a, 
//   {n.replace(" ","")]: n}
//   )
// ));
export function transformPositionName2Id(positionName) {
  return positionName.replace(" ","");
}
export const PLAYERS_POSITIONS = PLAYERS_ARRAY_POSITIONS.reduce((a, n)=>
  Object.assign({},  
    typeof a === "string" ? ({[transformPositionName2Id(a)]: a}) : a, 
    {[transformPositionName2Id(n)]: n}
  )
);
// FORM
export const FORMS_FIELDS = [
  {
    type: "text",
    name: "name",
    onValid: (value)=> new RegExp(/[a-zåäö ]/i).test(value),
    placeholder: "Player Name"
  },
  {
    type: "select",
    name: "position",
    placeholder: "Position",
    options: PLAYERS_POSITIONS
  },
  {
    type: "number",
    name: "age",
    min: 18,
    max: 40,
    placeholder: "Age"
  }
];

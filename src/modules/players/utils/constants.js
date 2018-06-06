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
const INPUT_STATE = "STATE";
export function getInputStateName(name) {
  return [name, INPUT_STATE].join("_");
}
export const FORMS_FIELDS = [
  {
    type: "text",
    name: "name",
    onValid: (value)=> !value || new RegExp(/^[a-zA-Z]+$/i).test(value),
    // pattern only invalids the submit action
    // pattern: "[a-zA-Z]",
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
    onValid: (value) => !value || (value >= 18 && value <= 40),
    placeholder: "Age"
  }
].map(c=>({...c, validateInput: getInputStateName(c.name)}));

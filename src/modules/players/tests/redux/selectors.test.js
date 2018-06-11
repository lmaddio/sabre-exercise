import { createSelector } from 'reselect';

import * as selectors from '../../redux/selectors';

const TEST_PLAYERS_ARRAY = [
  {
    age: "1"
  }, 
  {
    age: "2"
  }
];

const TEST_SUCC_OBJ = { 
  name: {
    value: "RON",
    state: true
  },
  err_name: {
    value: "RONA",
    state: true
  }
};

const TEST_ERROR_OBJ = { 
  name: {
    value: "RON",
    state: false
  },
  err_name: {
    value: "RON2",
    state: true
  }
};

describe('Selector tests', () => {
  it('Selector returns input and invalid button ', () => {
    expect(
      selectors.getInputsValues({ 
        playersInputData: {...TEST_ERROR_OBJ}
      })
    )
    .toEqual({
      ...TEST_ERROR_OBJ,
      buttonDisabled: true, 
    });
  });
  it('Selector returns input and valid button', () => {
    expect(
      selectors.getInputsValues({ 
        playersInputData: TEST_SUCC_OBJ
      })
    )
    .toEqual({
      ...TEST_SUCC_OBJ,
      buttonDisabled: false,
    });
  });
  it('Selector returns players data', () => {
    expect(
      selectors.getVisiblePlayers({ 
        playersReqData: { data: TEST_PLAYERS_ARRAY },
        playersFilters: {}
      })
    )
    .toEqual(TEST_PLAYERS_ARRAY.map(a=>Object.values(a)));
  });
  it('Filter players data', ()=>{
    expect(
      selectors.getVisiblePlayers({ 
        playersReqData: { 
          data: TEST_PLAYERS_ARRAY,
        },
        playersFilters: {
          age: {
            value: "1",
            state: true
          }
        }
      })
    )
    .toEqual([["1"]]);
  });
  it('Filter doesn\'t match', ()=>{
    expect(
      selectors.getVisiblePlayers({ 
        playersReqData: { 
          data: TEST_PLAYERS_ARRAY,
        },
        playersFilters: {
          age: {
            value: "3"
          }
        }
      })
    )
    .toEqual([]);
  });
});
/** @format */

import { GET_SYMBOLS, ADD_SYMBOL } from "../actions/actionType";

const initState = {
  symbols: []
};

console.log(initState.symbols);

export const symbolsReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_SYMBOL:
      return {
        ...state,
        symbols: [action.payload, ...state.symbols]
      };
    case GET_SYMBOLS:
      return {
        ...state,
        symbols: [...action.payload]
      };
    default:
      return state;
  }
};

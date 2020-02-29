/** @format */

import { ADD_DREAM, GET_DREAMS, GET_DREAM } from "../actions/actionType";

const initState = {
  dreams: []
};

export const dreamReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_DREAM:
      return {
        ...state,
        dreams: [action.payload, ...state.dreams]
      };
    case GET_DREAMS:
      return {
        ...state,
        dreams: [...action.payload]
      };
    case GET_DREAM:
      console.log(action.payload);
      return state.dreams.find(item => item._id === action.id);
    default:
      return state;
  }
};

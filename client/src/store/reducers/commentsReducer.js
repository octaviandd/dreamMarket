/** @format */

import { ADD_COMMENT, GET_COMMENTS } from "../actions/actionType";

const initState = {
  comments: []
};

export const commentsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: [...action.payload]
      };
    case ADD_COMMENT:
      return {
        ...state,
        comment: [action.payload, ...state.comments]
      };
    default:
      return state;
  }
};

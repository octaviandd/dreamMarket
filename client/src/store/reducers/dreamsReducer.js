/** @format */
import { ADD_DREAM } from "../actions/actionType";

const initState = {
  dreams: [
    {
      id: 1,
      title: "example",
      motif: "example",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      author: "example_name"
    },
    {
      id: 2,
      title: "example",
      motif: "example",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      author: "example_name"
    },
    {
      id: 3,
      title: "example",
      motif: "example",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      author: "example_name"
    }
  ],
  loading: false
};

export const dreamReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_DREAM:
      return {
        ...state,
        dreams: [action.payload, ...state.dreams]
      };
    default:
      return state;
  }
};

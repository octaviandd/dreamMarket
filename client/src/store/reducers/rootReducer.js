/** @format */

import { combineReducers } from "redux";
import { dreamReducer } from "./dreamsReducer";
import { commentsReducer } from "./commentsReducer";

export const rootReducer = combineReducers({
  dreams: dreamReducer,
  comments: commentsReducer
});

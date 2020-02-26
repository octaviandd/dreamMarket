/** @format */

import { combineReducers } from "redux";
import { dreamReducer } from "./dreamsReducer";

export const rootReducer = combineReducers({
  dreams: dreamReducer
});

/** @format */

import { ADD_SYMBOL, GET_SYMBOLS } from "./actionType";
import axios from "axios";

export const addSymbol = item => dispatch => {
  axios.post("/api/symbols", item).then(res =>
    dispatch({
      type: ADD_SYMBOL,
      payload: res.data
    })
  );
};

export const getSymbols = () => dispatch => {
  axios.get("/api/symbols").then(res => {
    dispatch({
      type: GET_SYMBOLS,
      payload: res.data
    });
  });
};

/** @format */

import { ADD_DREAM, GET_DREAMS, GET_DREAM } from "./actionType";
import axios from "axios";

export const addDream = item => dispatch => {
  axios.post("/api/dreams", item).then(res =>
    dispatch({
      type: ADD_DREAM,
      payload: res.data
    })
  );
};

export const getDreams = () => dispatch => {
  axios.get("/api/dreams").then(res => {
    dispatch({
      type: GET_DREAMS,
      payload: res.data
    });
  });
};

export const getDream = id => dispatch => ({
  type: GET_DREAM,
  id
});

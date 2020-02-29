/** @format */

import { GET_COMMENTS, ADD_COMMENT } from "./actionType";
import axios from "axios";

export const getComments = () => dispatch => {
  axios.get("/api/comments").then(res => {
    dispatch({
      type: GET_COMMENTS,
      payload: res.data
    });
  });
};

export const addComment = item => dispatch => {
  axios.post("/api/comments", item).then(res => {
    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });
  });
};

/** @format */

import React, { useEffect, useState } from "react";
import { Form, FormInput, FormGroup, FormTextarea, Button } from "shards-react";
import { connect } from "react-redux";
import { addComment, getComments } from "../store/actions/commentsActions";
import Comment from "./Comment";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  }
}));

function Comments({ getItems, onClickAddComment, comments }) {
  const classes = useStyles();

  useEffect(() => {
    getItems();
  }, [comments]);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const items = comments.comments.map(comment => (
    <Comment key={comment._id} item={comment}></Comment>
  ));

  return (
    <div width="100%">
      {items ? (
        items
      ) : (
        <div className="center">
          <div className={classes.root}>
            <CircularProgress />
          </div>
        </div>
      )}
      <Form
        className="mt-4"
        onSubmit={e => {
          e.preventDefault();
          const newItem = { name, desc };
          onClickAddComment(newItem);
          setName("");
          setDesc("");
        }}
      >
        <FormGroup>
          <label htmlFor="#username">Name</label>
          <FormInput
            id="#username"
            placeholder="Username"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </FormGroup>
        <FormTextarea
          rows="10"
          onChange={e => setDesc(e.target.value)}
          value={desc}
        />
        <Button type="submit ">Add a Comment</Button>
      </Form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => dispatch(getComments()),
    onClickAddComment: item => dispatch(addComment(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);

/** @format */

import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Button,
  Collapse
} from "shards-react";

import CommentsContainer from "../components/CommentsContainer";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  }
}));

function DreamPage({ dream }) {
  const [showComments, setComments] = useState(false);
  const classes = useStyles();

  if (dream) {
    const { title, motif, desc, author } = dream;
    return (
      <div className="horizontal-center-column mt-4">
        <Card style={{ width: "70%" }}>
          <CardHeader>{title}</CardHeader>
          <CardBody>
            <CardTitle>{motif}</CardTitle>
            <p>{desc}</p>
          </CardBody>
          <CardFooter>{author}</CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="center">
      <div className={classes.root}>
        <CircularProgress />
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.slug;
  const items = state.dreams.dreams;
  const finalItem = items.find(item => item._id === id);
  return {
    dream: finalItem
  };
};

export default connect(mapStateToProps)(DreamPage);

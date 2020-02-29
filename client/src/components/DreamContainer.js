/** @format */

import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

const DreamContainer = ({ dream }) => {
  return (
    <div>
      <Card>
        <CardHeader>{dream.title}</CardHeader>
        <CardImg></CardImg>
        <CardBody>
          <CardTitle>{dream.motif}</CardTitle>
          <p style={{ maxHeight: "142px", overflow: "hidden" }}>{dream.desc}</p>
          <Link to={`/dreams/${dream._id}`}>
            <Button>Read more &rarr;</Button>
          </Link>
        </CardBody>
        <CardFooter>{dream.author}</CardFooter>
      </Card>
    </div>
  );
};

export default DreamContainer;

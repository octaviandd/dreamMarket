/** @format */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
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
          <p>{dream.desc}</p>
          <Button>Read more &rarr;</Button>
        </CardBody>
        <CardFooter>{dream.author}</CardFooter>
      </Card>
    </div>
  );
};

export default DreamContainer;

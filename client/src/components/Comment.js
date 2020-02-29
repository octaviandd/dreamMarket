/** @format */

import React from "react";
import {
  CardTitle,
  Card,
  CardBody,
  CardFooter,
  CardSubtitle,
  CardHeader
} from "shards-react";

export default function Comment({ item }) {
  return (
    <div>
      <Card>
        <CardHeader>{item.name}</CardHeader>
        <CardBody>
          <p>{item.desc}</p>
        </CardBody>
        <CardFooter>{item.date.slice(0, 10)}</CardFooter>
      </Card>
    </div>
  );
}

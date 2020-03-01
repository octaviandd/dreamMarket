/** @format */

import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

const SymbolContainer = ({ symbol }) => {
  return (
    <div>
      <Card>
        <CardHeader>{symbol.title}</CardHeader>
        <CardImg></CardImg>
        <CardBody>
          <p style={{ maxHeight: "142px", overflow: "hidden" }}>
            {symbol.desc}
          </p>
          <Link to={`/symbols/${symbol._id}`}>
            <Button theme="secondary">Read more &rarr;</Button>
          </Link>
        </CardBody>
        <CardFooter>{symbol.author}</CardFooter>
      </Card>
    </div>
  );
};

export default SymbolContainer;

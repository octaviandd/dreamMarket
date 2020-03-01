/** @format */

import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Card, CardHeader, CardBody, CardFooter } from "shards-react";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  }
}));

function SymbolPage({ symbol }) {
  // const [showComments, setComments] = useState(false);
  const classes = useStyles();

  if (symbol) {
    const { title, desc, author } = symbol;
    return (
      <div className="horizontal-center-column mt-4">
        <Card style={{ width: "70%" }}>
          <CardHeader>{title}</CardHeader>
          <CardBody>
            <p>{desc}</p>
          </CardBody>
          <CardFooter>{author}</CardFooter>
        </Card>
        {/* <div>
            <Button onClick={() => setComments(!showComments)} className="mt-5">
              Show Comments
            </Button>
            <Collapse open={showComments}>
              <CommentsContainer></CommentsContainer>
            </Collapse>
          </div> */}
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
  const items = state.symbols.symbols;
  const finalItem = items.find(item => item._id === id);
  return {
    symbol: finalItem
  };
};

export default connect(mapStateToProps)(SymbolPage);

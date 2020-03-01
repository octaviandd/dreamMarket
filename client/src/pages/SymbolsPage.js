/** @format */

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addSymbol, getSymbols } from "../store/actions/symbolsActions";
import AddSymbolModal from "../components/AddSymbolModal";
import { Container } from "shards-react";
import SymbolContainer from "../components/SymbolContainer";
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

function SymbolsPage({ addItem, getItems, symbols }) {
  const classes = useStyles();

  console.log(symbols);
  useEffect(() => {
    getItems();
  }, []);

  const renderSymbols = symbols.symbols.map(symbol => {
    return (
      <Container key={symbol._id} style={{ marginTop: "2rem" }}>
        <SymbolContainer symbol={symbol} />
      </Container>
    );
  });

  return (
    <div>
      <AddSymbolModal addItem={addItem}></AddSymbolModal>
      <div style={{ display: "flex" }}>
        {renderSymbols ? (
          renderSymbols
        ) : (
          <div className="center">
            <div className={classes.root}>
              <CircularProgress />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    symbols: state.symbols
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addSymbol(item)),
    getItems: () => dispatch(getSymbols())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SymbolsPage);

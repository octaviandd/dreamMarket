/** @format */
import React, { useEffect } from "react";
import { Container } from "shards-react";
import DreamContainer from "../components/DreamContainer";
import AddDreamModal from "../components/AddDreamModal";
import { connect } from "react-redux";
import { addDream, getDreams } from "../store/actions/dreamsActions";
import PropTypes from "prop-types";
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

const DreamsPage = ({ dreams, addItem, getItems }) => {
  const classes = useStyles();

  useEffect(() => {
    getItems();
  }, [dreams]);

  const renderDreams = dreams.dreams.map(dream => {
    return (
      <Container key={dream._id} style={{ marginTop: "2rem" }}>
        <DreamContainer dream={dream} />
      </Container>
    );
  });

  return (
    <React.Fragment>
      <AddDreamModal addItem={addItem} />
      {renderDreams ? (
        renderDreams
      ) : (
        <div className="center">
          <div className={classes.root}>
            <CircularProgress />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

DreamsPage.propTypes = {
  dreams: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired,
  getItems: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    dreams: state.dreams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addDream(item)),
    getItems: () => dispatch(getDreams())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DreamsPage);

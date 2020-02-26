/** @format */
import React from "react";
import { Container } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import DreamContainer from "../components/DreamContainer";
import AddDreamModal from "../components/AddDreamModal";
import { connect } from "react-redux";
import { addDream } from "../store/actions/dreamsActions";

const DreamsPage = ({ dreams }) => {
  const renderDreams = dreams.dreams.map(dream => {
    return (
      <Container key={dream.id} style={{ marginTop: "2rem" }}>
        <DreamContainer dream={dream} />
      </Container>
    );
  });

  return (
    <React.Fragment>
      <AddDreamModal />
      {renderDreams}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    dreams: state.dreams
  };
};

const mapDispatchToProps = (dispatch, item) => {
  return {
    addItem: dispatch(addDream(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DreamsPage);

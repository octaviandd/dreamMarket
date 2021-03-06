/** @format */

import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Col,
  Row,
  Container,
  Form,
  FormInput,
  FormGroup,
  FormTextarea
} from "shards-react";
import PropTypes from "prop-types";

const AddSymbolModal = ({ addItem }) => {
  const [isOpen, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem"
        }}
      >
        <Row>
          <Col>
            <Button theme="secondary" onClick={() => setOpen(!isOpen)}>
              Add Symbol
            </Button>
          </Col>
        </Row>
      </Container>
      <Modal open={isOpen} toggle={() => setOpen(!isOpen)}>
        <ModalHeader>New Symbol</ModalHeader>
        <ModalBody>
          <Form
            onSubmit={e => {
              e.preventDefault();
              const newItem = {
                title,
                desc,
                author
              };
              console.log(newItem);
              addItem(newItem);
              setOpen(!isOpen);
            }}
          >
            <FormGroup>
              <label htmlFor="#username">Title</label>
              <FormInput
                name="title"
                id="#username"
                placeholder="Username"
                onChange={e => setTitle(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <p className="mb-2"> Waiting for you to say something...</p>
              <label htmlFor="#description">Description</label>
              <FormTextarea
                name="description"
                onChange={e => setDesc(e.target.value)}
              ></FormTextarea>
            </FormGroup>
            <FormGroup>
              <label htmlFor="#author">Author</label>
              <FormInput
                id="#author"
                placeholder="Author"
                onChange={e => setAuthor(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Button theme="secondary" type="submit">
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

AddSymbolModal.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default AddSymbolModal;

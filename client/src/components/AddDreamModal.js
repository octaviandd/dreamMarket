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

const AddDreamModal = () => {
  const [isOpen, setOpen] = useState(false);

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
            <Button onClick={() => setOpen(!isOpen)}>Add Dream</Button>
          </Col>
        </Row>
      </Container>
      <Modal open={isOpen} toggle={() => setOpen(!isOpen)}>
        <ModalHeader>New Dream</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <label htmlFor="#username">Title</label>
              <FormInput id="#username" placeholder="Username" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#username">Motif</label>
              <FormInput id="#username" placeholder="Username" />
            </FormGroup>
            <FormGroup>
              <p className="mb-2">🤔 Waiting for you to say something...</p>
              <label htmlFor="#description">Description</label>
              <FormTextarea></FormTextarea>
            </FormGroup>
            <FormGroup>
              <label htmlFor="#authopr">Author</label>
              <FormInput id="#author" placeholder="Author" />
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddDreamModal;

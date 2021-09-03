import React from "react";
import { Container, Row } from "react-bootstrap";
import "./contact.css";
import Form from "./Form";

function Contact(props) {
  return (
    <Container fluid>
      <Row>
        <div id="contact">
          <h2 id="title">Contact</h2>
          <Form />
        </div>
      </Row>
    </Container>
  );
}

export default Contact;

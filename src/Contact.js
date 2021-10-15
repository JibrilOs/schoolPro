import React from "react";
import { Container, Row } from "react-bootstrap";
import "./contact.css";
import Form1 from "./Form";

function Contact(props) {
  return (
    <Container fluid id="contact-wrapper">
      <Row>
        <div id="contact">
          <Form1 />
        </div>
      </Row>
    </Container>
  );
}

export default Contact;

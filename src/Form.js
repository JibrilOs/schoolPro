import React, { useState, useRef } from "react";
import { Button, Col, Form, Row, InputGroup, Container } from "react-bootstrap";
import emailjs from "emailjs-com";
import ModalC from "./Modal";
import "./form1.css";

function Form1(props) {
  const [validated, setValidated] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  /** email server */
  function sendEmail(e) {
    // e.preventDefault();
    emailjs
      .sendForm(
        "service_s7rk309",
        "template_txg5ge5",
        e.target,
        "user_XyMsDcZzXvTIHrn14tPsL"
      )
      .then((res) => {
        console.log(res);
        console.log(modalShow);
        setModalShow(true);
        return setTimeout(() => window.location.reload(), 5000);
        // window.location.reload();
      })
      .catch((err) => console.log(err));
  }
  /** email server */
  //  start handle
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    const modalTrigger = () => {
      event.preventDefault();
      setValidated(true);
      if (validated === true || form.checkValidity() === true) {
        return sendEmail(event);
      }
    };
    modalTrigger();
  };
  // handle  end

  return (
    <Container fluid>
      <div className="row">
        <div className="  bd-ex col-sm-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
          <Row>
            <div className="header-text  col-12">
              <h1 className="display-5 text-center">Contact Me</h1>
            </div>
          </Row>
          <Row>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group controlId="validationCustom01">
                  <Form.Label
                    className="justify-content-start d-flex "
                    as="legend"
                  >
                    Name
                  </Form.Label>
                  <InputGroup hasValidation size="lg">
                    <InputGroup.Text id="inputGroupPrepend">
                      <i class="bi bi-person-circle" />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your Name "
                      aria-describedby="inputGroupPrepend"
                      required
                      className="col-sm-12"
                    />
                    <Form.Control.Feedback type="invalid">
                      <h5 style={{ fontSize: "1.5rem", fontweight: "bold" }}>
                        Please type your name
                      </h5>
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group controlId="validationCustom01">
                  <Form.Label
                    className="justify-content-start d-flex "
                    as="legend"
                  >
                    Email
                  </Form.Label>
                  <InputGroup hasValidation size="lg">
                    <InputGroup.Text id="inputGroupPrepend">
                      <i className="bi bi-envelope-fill"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your Email"
                      aria-describedby="inputGroupPrepend"
                      required
                      className="col-sm-12"
                    />
                    <Form.Control.Feedback type="invalid">
                      <h5 style={{ fontSize: "1.5rem", fontweight: "bold" }}>
                        Please type your Email
                      </h5>
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom04">
                  <Form.Label
                    className="justify-content-start d-flex "
                    as="legend"
                  >
                    Country
                  </Form.Label>
                  <Form.Select size="lg" required as="select">
                    <option value="">Select country</option>
                    <option>Finland</option>
                    <option>Outside of Finland</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    <h5
                      style={{
                        fontSize: "1.5rem",
                        fontweight: "bold",
                        margin: "0 0",
                        padding: "0 0",
                      }}
                    >
                      Please provide a valid Country.
                    </h5>
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12">
                  <Form.Label
                    className="justify-content-start d-flex "
                    as="legend"
                  >
                    Message
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    style={{ height: "9vh" }}
                    placeholder="Please Type Your Message "
                    required
                    name="message"
                  />
                  <Form.Control.Feedback type="invalid">
                    <h5
                      style={{
                        fontSize: "1.5rem",
                        fontweight: "bold",
                        margin: "0 0",
                        padding: "0 0",
                      }}
                    >
                      Please write a message.
                    </h5>
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <div className="mb-4 mt-3 py-2">
                <Form.Label as="legend" row sm={12}>
                  Gender
                </Form.Label>
                <Form.Check
                  inline
                  label="Male"
                  name="group1"
                  type="radio"
                  id={`inline-radio-1`}
                  required
                  style={{ fontSize: "1.5rem", fontweight: "bold" }}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="group1"
                  type="radio"
                  id={`inline-radio-1`}
                  style={{
                    fontSize: "1.5rem",
                    fontweight: "bold",
                    margin: "0 0",
                  }}
                />
              </div>

              <Button type="submit" block className="bth " size="lg">
                Send Message
              </Button>
              {modalShow === true && (
                <ModalC modalShow={modalShow} setModalShow={setModalShow} />
              )}
            </Form>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default Form1;

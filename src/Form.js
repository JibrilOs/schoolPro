import React, { useState } from "react";
import { Button, Col, Form, Row, InputGroup, Container } from "react-bootstrap";
import "./form1.css";
function Form1(props) {
  const [validated, setValidated] = useState(false);
  const [color, setColor] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container fluid>
      <div className="row">
        <div className="bd-ex mt-5 col-sm-12 col-md-9 col-lg-7  col-xl-6 col-xxl-5">
          <Row>
            <div className="header-text mb-2 col-12">
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
                  <InputGroup
                    hasValidation
                    onChange={(e) => console.log(e.target.value.length)}
                    size="lg"
                  >
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
                    <h5 style={{ fontSize: "1.5rem", fontweight: "bold" }}>
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
                    style={{ height: "19vh" }}
                    placeholder="Please Type Your Message "
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    <h5 style={{ fontSize: "1.5rem", fontweight: "bold" }}>
                      Please write a message.
                    </h5>
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <div className="mb-5 mt-4">
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
                  style={{ fontSize: "1.5rem", fontweight: "bold" }}
                />
              </div>

              <Button type="submit">Send Message</Button>
            </Form>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default Form1;

import React from "react";
import "./homepage.css";
import Effect from "./effect/Effect";

import { Jumbotron, Button, Container, Row } from "reactstrap";

function Homepage(props) {
  return (
    <Jumbotron id="hero">
      <Container>
        <Effect />
        <h1 className="hero-title">
          Hi, my name is{" "}
          <span className="text-color-main">
            JIBRIL SALIM OSMAN FRONTEND-DEVELOPER
          </span>
          <br />
          I'm the Unknown Developer.
        </h1>
        <Button color="primary" size="lg" block>
          Know more
        </Button>
      </Container>
    </Jumbotron>
  );
}

export default Homepage;

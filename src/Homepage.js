import React, { useState } from "react";
import "./homepage.css";
import Effect from "./effect/Effect";
import cv from "./asset/cve.pdf";
import About from "./About";
import scrollToComponent from "react-scroll-to-component";

import { Jumbotron, Button, Container, Row } from "reactstrap";

function Homepage(props) {
  const [state, setState] = useState(false);
  return (
    <Jumbotron id="hero">
      <Container>
        <Effect />
        <div className="bga">
          <h1 className="hero-title">
            Hi, my name is{" "}
            <span className="text-color-main">
              JIBRIL SALIM OSMAN FRONTEND-DEVELOPER
            </span>
            <br />
            I'm the Unknown Developer.
          </h1>
          <a color="primary" size="lg" block className="bth" href={cv} download>
            <i class="bi bi-box-arrow-up-right"></i> Download CV
          </a>
        </div>
      </Container>
    </Jumbotron>
  );
}

export default Homepage;

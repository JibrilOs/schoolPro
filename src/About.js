import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from "./asset/profile.jpg";

import "./About.css";

function About(props) {
  return (
    <div>
      <Container fluid className="wrapper_about">
        <Row>
          <h1 className="title">ABOUT ME</h1>
          <Col sm={12} md={4} lg={3}>
            <div className="img_wrapper">
              <img
                src={profile}
                alt=" cap"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </Col>
          <Col sm={12} md={8} lg={8}>
            <div className="info">
              {" "}
              <p className="info_text">
                I am a self taught developer ,who loves to challenge himself
                into learning new things . I grind HTML and CSS and then weld
                them with javascript into beautiful and efficient websites.I
                like to code things from scratch, and enjoy bringing ideas to
                life in the browser.I have a passion for web design and love to
                create for web and mobile devices.I’m an aspiring web designer
                who loves everything about the web.I’d like to work for a web
                design firm helping clients create an impressive online
                presence.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;

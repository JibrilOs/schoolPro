import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilty from "react-tilty";
import Tilt from "react-parallax-tilt";
import Fade from "react-reveal/Fade";
import "./project.css";
import banner from "./asset/josdev.jpg";
import banner4 from "./asset/banner4.jpg";
import banner5 from "./asset/banner5.png";
import banner1 from "./asset/banner1.jpg";

function Project(props) {
  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <h2 className="project-title ">Projects</h2>
          <Row className="mb">
            <Col lg={4} sm={12}>
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title ">Music player</h3>
                <Fade left>
                  <div>
                    <p className="mb-4  text__info ">
                      This a simple music player i built using react js and
                      context api
                    </p>
                  </div>
                </Fade>

                <a
                  target="https://josdev.netlify.app/"
                  className="btn btn-primary btn-lg"
                  role="button"
                  data-bs-toggle="button"
                  href="https://josdev.netlify.app/"
                >
                  Demo
                </a>
                <a
                  target="https://github.com/JibrilOs/Music-player-App"
                  className="btn btn-primary btn-lg "
                  role="button"
                  data-bs-toggle="button"
                  href="https://github.com/JibrilOs/Music-player-App"
                >
                  Code
                </a>
              </div>
            </Col>
            <Col Col lg={8} sm={12}>
              <Fade right>
                <div className="project-wrapper__image">
                  <a href="https://github.com/JibrilOs/Music-player-App">
                    <Tilt>
                      <img
                        className="img-fluid thumbnail rounded"
                        src={banner}
                        alt="pg"
                      />
                    </Tilt>
                  </a>
                </div>
              </Fade>
            </Col>
          </Row>

          <Row className="mb">
            <Col Col lg={4} sm={12}>
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">AKILU FARMS</h3>
                <Fade left>
                  <div>
                    <p className="mb-4 text__info">
                      {/* AKILU FARMS is located at Kanyakope in the Volta Region of
                      Ghana. Presently we have a little over 800 layers and over
                      a 1000 broilers at the farm which will increase by the
                      first quarter of 2019. Our poultry are reared to the
                      highest standard of quality. Poultry feed is self-prepared
                      to ensure the chicks get the required necessary nutrients
                      and in the right amounts at every stage of their
                      development cycle.The broilers are also organically reared
                      and their meat goes through a hygienic preparation method,
                      in the best of environment before being packaged for sale. */}
                      This project is for a poultry farm called Akilu farms and
                      it was build with Html, Css, Javscript and Boostrap
                    </p>
                  </div>
                </Fade>
                <a
                  className="btn btn-primary btn-lg "
                  role="button"
                  data-bs-toggle="button"
                  href="https://akilufarms.netlify.com/"
                >
                  Demo
                </a>
                <a
                  className="btn btn-primary btn-lg"
                  role="button"
                  data-bs-toggle="button"
                  href="https://github.com/JibrilOs/akilufarms"
                >
                  Code
                </a>
              </div>
            </Col>
            <Col Col lg={8} sm={12}>
              <Fade right>
                <div className="project-wrapper__image">
                  <a
                    href="http://www.akilufarms.com/"
                    target="http://www.akilufarms.com/"
                  >
                    <Tilt
                      glareEnable={true}
                      glareMaxOpacity={0.9}
                      glareColor="#ffffff"
                      glarePosition="all"
                      glareBorderRadius="20px"
                      perspective={900}
                      transitionSpeed={1000}
                      reset={true}
                    >
                      <img
                        className="img-fluid thumbnail rounded "
                        src={banner4}
                        alt="pg"
                      />
                    </Tilt>
                  </a>
                </div>
              </Fade>
            </Col>
          </Row>

          <Row className="mb">
            <Col Col lg={4} sm={12}>
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">My Portfolio</h3>
                <Fade left>
                  <div>
                    <p className="mb-4  text__info">
                      This project is my personal portfolio that i built . I
                      used React,Boostrap and Tilty.
                    </p>
                  </div>
                </Fade>
                <a
                  target="https://jibrilos.github.io/schoolPro/"
                  className="btn btn-primary btn-lg "
                  role="button"
                  data-bs-toggle="button"
                  href="https://jibrilos.github.io/schoolPro/"
                >
                  Demo
                </a>
                <a
                  target="https://github.com/JibrilOs/schoolPro"
                  className="btn btn-primary btn-lg "
                  role="button"
                  data-bs-toggle="button"
                  href="https://github.com/JibrilOs/schoolPro"
                >
                  Code
                </a>
              </div>
            </Col>
            <Col Col lg={8} sm={12}>
              <Fade right>
                <div className="project-wrapper__image">
                  <a href="#!">
                    <Tilt>
                      <img
                        className="img-fluid thumbnail rounded"
                        src={banner1}
                        alt="pg"
                      />
                    </Tilt>
                  </a>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Project;

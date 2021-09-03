import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilty from "react-tilty";
import "./project.css";
import banner from "./asset/banner.png";
import banner4 from "./asset/banner4.jpg";
import banner5 from "./asset/banner5.png";

function Project(props) {
  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <h2 className="project-title ">Projects</h2>

          <Row className="mb">
            <Col lg={4} sm={12}>
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">PriscyPee PHOTO</h3>
                <div>
                  <p className="mb-4">
                    Natalija Gormalova is a documentary photographer and
                    filmmaker born in Latvia in 1987. She studied MA Photography
                    at the Royal College of Art in London. Since 2015 she has
                    been working in Ghana and South Africa. In her photographic
                    works Natalija focuses on social issues and shifting
                    cultures and identities in contemporary Africa and beyond.
                    Her work has been exhibited at the 4th Thessaloniki Biennale
                    of Contemporary Art in Greece, Folkestone Fringe Triennial
                    in the UK, “Altitude+1000” Photography Festival in
                    Switzerland, and Ghana Portrait Prize. Recently, Natalija
                    has co-directed and filmed her first feature documentary
                    about the youth in the fishing villages of Ghana that has
                    been broadcasted on TVNZ on Demand.
                  </p>
                </div>

                <a
                  target="https://priscy.netlify.com/"
                  className="btn btn-primary btn-lg"
                  role="button"
                  data-bs-toggle="button"
                  href="https://priscy.netlify.com/"
                >
                  See Live
                </a>
                <a
                  target="https://github.com/JibrilOs/priscy_project.git"
                  className="btn btn-primary btn-lg mx-4"
                  role="button"
                  data-bs-toggle="button"
                  href="https://github.com/JibrilOs/priscy_project.git"
                >
                  Source Code
                </a>
              </div>
            </Col>
            <Col Col lg={8} sm={12}>
              <Tilty
                className="project-wrapper__image"
                max={7}
                glare={true}
                maxGlare={0.5}
                reset={true}
              >
                <a href="https://priscy.netlify.com/">
                  <div className="thumbnail rounded">
                    <img className="img-fluid" src={banner} alt="pg" />
                  </div>
                </a>
              </Tilty>
            </Col>
          </Row>

          <Row className="mb">
            <Col Col lg={4} sm={12}>
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">AKILU FARMS</h3>
                <div>
                  <p className="mb-4">
                    AKILU FARMS is located at Kanyakope in the Volta Region of
                    Ghana. Presently we have a little over 800 layers and over a
                    1000 broilers at the farm which will increase by the first
                    quarter of 2019. Our poultry are reared to the highest
                    standard of quality. Poultry feed is self-prepared to ensure
                    the chicks get the required necessary nutrients and in the
                    right amounts at every stage of their development cycle.The
                    broilers are also organically reared and their meat goes
                    through a hygienic preparation method, in the best of
                    environment before being packaged for sale.
                  </p>
                </div>
                <a
                  className="btn btn-primary btn-lg "
                  role="button"
                  data-bs-toggle="button"
                  href="https://akilufarms.netlify.com/"
                >
                  See Live
                </a>
                <a
                  className="btn btn-primary btn-lg mx-4"
                  role="button"
                  data-bs-toggle="button"
                  href="https://github.com/JibrilOs/akilufarms"
                >
                  Source Code
                </a>
              </div>
            </Col>
            <Col Col lg={8} sm={12}>
              <Tilty max={7} glare={true} maxGlare={0.5} reset={true}>
                <a href="http://www.akilufarms.com/">
                  <div data-tilt className="thumbnail rounded">
                    <img className="img-fluid" src={banner4} alt="pg" />
                  </div>
                </a>
              </Tilty>
            </Col>
          </Row>

          <Row className="mb">
            <Col Col lg={4} sm={12}>
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">Project Title</h3>
                <div>
                  <p className="mb-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Excepturi neque, ipsa animi maiores repellendus distinctio
                    aperiam earum dolor voluptatum consequatur blanditiis
                    inventore debitis fuga numquam voluptate ex architecto
                    itaque molestiae.
                  </p>
                </div>
                <a
                  target="_blank"
                  className="btn btn-primary btn-lg "
                  role="button"
                  data-bs-toggle="button"
                  href="#!"
                >
                  See Live
                </a>
                <a
                  target="_blank"
                  className="btn btn-primary btn-lg mx-4"
                  role="button"
                  data-bs-toggle="button"
                  href="#!"
                >
                  Source Code
                </a>
              </div>
            </Col>
            <Col Col lg={8} sm={12}>
              <Tilty
                className="project-wrapper__image"
                max={7}
                glare={true}
                maxGlare={0.5}
                reset={true}
              >
                <a href="#!">
                  <div className="thumbnail rounded">
                    <img className="img-fluid" src={banner5} alt="pg" />
                  </div>
                </a>
              </Tilty>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Project;

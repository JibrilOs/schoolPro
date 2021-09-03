import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

import Homepage from "./Homepage";
import About from "./About";
import Project from "./Project";
import Navb from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      {/* <Container fluid className="cont"> */}
      {/* <Row>
          <Col>1 of 1</Col>
        </Row> */}
      <Navb />

      <Homepage />
      <About />
      <Project />
      <Contact />
      <Footer />

      {/* </Container> */}
    </div>
  );
}

export default App;

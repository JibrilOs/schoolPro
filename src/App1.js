import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import scrollToComponent from "react-scroll-to-component";
import { Parallax } from "react-parallax";
import Homepage from "./Homepage";
import About from "./About";
import Project from "./Project";
import Navb from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
  };
  const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    // height: auto,
    width: 1300,
  };
  return (
    <div className="App">
      {/* <Container fluid className="cont"> */}
      {/* <Row>
          <Col>1 of 1</Col>
        </Row> */}
      {/* <Navb />
      <Homepage />
      <About />
      <Project />
      <Contact />
      <Footer /> */}
      {/* </Container> */}
      <Navb />
    </div>
  );
}

export default App;

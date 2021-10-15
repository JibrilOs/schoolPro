import React, { Component } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

import Homepage from "./Homepage";
import About from "./About";
import Project from "./Project";

import Contact from "./Contact";
import Footer from "./Footer";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
} from "reactstrap";
import scrollToComponent from "react-scroll-to-component";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";

const styles = {
  textAlign: "center",
};
const insideStyles = {
  //   padding: "20px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",

  width: "90%",
};
const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

const image2 =
  "https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg";
const image3 =
  "https://cssh.northeastern.edu/bari/wp-content/uploads/sites/30/2020/08/DATA-SCIENCE-PROJECTS.png";
const image4 =
  "https://www.stockspots.eu/wp-content/uploads/2019/10/contact-1.png";
const image5 =
  "https://cdn.dribbble.com/users/330915/screenshots/3587000/10_coding_dribbble.gif";
class App extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Navbar color="dark" dark expand="md" className="fixed-top">
          <NavbarBrand
            className="navbar-brand mb-0 h1 px-2  mx-1 logo"
            href="/#"
          >
            {`< JOSDEV / >`}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar className="col-md-12 justify-content-end ">
              <NavItem>
                <NavLink
                  onClick={() =>
                    scrollToComponent(this.Home, {
                      offset: 0,
                      align: "top",
                      duration: 100,
                      ease: "outCirc",
                    })
                  }
                >
                  <i className="fa fa-home fa-lg"></i> Home
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  onClick={() =>
                    scrollToComponent(this.AboutMe, {
                      offset: 0,
                      align: "top",
                      duration: 100,
                      ease: "outCirc",
                    })
                  }
                >
                  <i className="fa fa-child fa-lg"></i> About Me{" "}
                </NavLink>
              </NavItem>

              {/* <NavItem >
                    <a
                      className="btn"
                      onClick={() =>
                        scrollToComponent(this.Skills, {
                          offset: 0,
                          align: "top",
                          duration: 100,
                          ease: "outCirc",
                        })
                      }
                    >
                      <span className="fa fa-cogs fa-lg"></span> Skills
                    </a>
                  </NavItem> */}

              <NavItem className="navItem">
                <NavLink
                  onClick={() =>
                    scrollToComponent(this.Projects, {
                      offset: 0,
                      align: "top",
                      duration: 100,
                      ease: "outCirc",
                    })
                  }
                >
                  <i className="fa  fa-cubes fa-lg"></i> Projects
                </NavLink>
              </NavItem>

              <NavItem className="navItem">
                <NavLink
                  onClick={() =>
                    scrollToComponent(this.Contact, {
                      offset: 0,
                      align: "top",
                      duration: 100,
                      ease: "outCirc",
                    })
                  }
                >
                  <span className="fa fa-paper-plane fa-lg"></span> Contact Me
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <section
          className="Home "
          ref={(section) => {
            this.Home = section;
          }}
        >
          <div style={styles}>
            <Parallax bgImage={image5} strength={500} className="home__bg">
              <div style={{ height: 1000 }} id="home">
                <div style={insideStyles} className="home__wrapper">
                  <Homepage />
                </div>
              </div>
            </Parallax>
          </div>
        </section>

        <section
          className="AboutMe"
          ref={(section) => {
            this.AboutMe = section;
          }}
        >
          <div style={styles}>
            <Parallax bgImage={image2} strength={100} className="About_img">
              <div style={{ height: 1000 }} id="about">
                <div style={insideStyles} className="about__wrapper">
                  <About />
                </div>
              </div>
            </Parallax>
          </div>
        </section>

        <section
          className="Projects"
          ref={(section) => {
            this.Projects = section;
          }}
        >
          <div style={styles}>
            <Parallax strength={200}>
              <div style={{ height: 2000 }} id="projects-wrapper-parallax">
                <div style={insideStyles} id="projects-positioner">
                  <Project />
                </div>
              </div>
            </Parallax>
          </div>
        </section>

        <section
          className="Contact"
          ref={(section) => {
            this.Contact = section;
          }}
        >
          <Contact />
        </section>
        <Footer />
      </div>
    );
  }
}
export default App;

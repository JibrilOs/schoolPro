import React, { useState } from "react";

import { Parallax } from "react-parallax";
import Homepage from "./Homepage";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

import scrollToComponent from "react-scroll-to-component";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import "./navb.css";

const Navb = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container fluid>
      <Navbar color="dark" dark expand="md" className="fixed-top">
        <NavbarBrand href="/#" className=" navbar-brand mb-0 h1 px-2 logo1">
          JOSDEV
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar id="wrapper">
            <NavItem>
              <NavLink href="/#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ABOUT">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#">Contact</NavLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default Navb;

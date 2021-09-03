import React from "react";
import { Container } from "reactstrap";
import "./footer.css";

function Footer(props) {
  return (
    <div>
      <footer className="footer navbar-static-bottom">
        <Container>
          <a href="#top" className="back-to-top">
            <i className="fa fa-angle-up fa-2x arr" aria-hidden="true"></i>
          </a>
          <div className="social-links">
            <a href="https://www.facebook.com/jibril.s.osman" target="/">
              <i className=" fa fa-facebook fa-inverse"></i>
            </a>
            <a href="https://codepen.io/jibril-salim-osman" target="/">
              <i className="fa fa-codepen fa-inverse"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jibril-salim-osman-10898698"
              target="/"
            >
              <i className="fa fa-linkedin fa-inverse"></i>
            </a>
            <a href="https://github.com/JibrilOs" target="/">
              <i className="fa fa-github fa-inverse"></i>
            </a>
          </div>

          <hr />

          <p className="footer_text">
            JIBRIL SALIM OSMAN© 2021 - Developed with
            <i
              style={{ color: "#dc3545", fontSize: "1.8rem" }}
              className="fa fa-heart px-1"
            ></i>
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;

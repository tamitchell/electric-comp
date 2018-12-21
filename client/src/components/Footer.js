import React from "react";

import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <Container className="footer" fluid={true}>
      <Row className="d-none d-lg-block d-xl-block">
        <Col>
          <h5 className="text-uppercase">Footer Content</h5>
          <p>
            Here you can use rows and columns here to organize your footer
            content.
          </p>
        </Col>
        <Col>
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </Col>
        <Col>
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
          <Col>   
        <div className="footer-copyright text-center py-3">
          © 2018 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/">
            {" "}
            Diverse Electric
          </a>
          {" "}All Rights Reserved.
        </div>
          </Col>
      </Row>
    </Container>
  );
};

export default Footer;

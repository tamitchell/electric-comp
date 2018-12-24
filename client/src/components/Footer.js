import React from "react";
import { Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <Container className="footer" fluid={true}>
      <Row className="d-none d-lg-block d-xl-block">
        <div>
          <h5 className="text-uppercase">Footer Content</h5>
          <p>
            Here you can use rows and columns here to organize your footer
            content.
          </p>
        </div>
        <div>
          <h5 className="text-uppercase">Site Map</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">Pricing</a>
            </li>
            <li>
              <a href="#!">Services</a>
            </li>
            <li>
              <a href="#!">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-uppercase">Our Partners</h5>
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
        </div>
      </Row>
      <Row>
        <div>
            <p>Follow us on Social Media!</p>
            <a href="https://twitter.com/"><img src={require("../img/social-media-svg/twitter.png")} alt="twitter" /></a>
            <a href="https://www.instagram.com/"><img src={require("../img/social-media-svg/instagram.png")} alt="instagram" /></a>
            <a href="https://www.facebook.com/"><img src={require("../img/social-media-svg/facebook.png")} alt="facebook" /></a>
            <a href="https://www.linkedin.com/"><img src={require("../img/social-media-svg/linkedin-logo.png")} alt="linked in" /></a>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2018 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/">
            {" "}
            Diverse Electric
          </a>
          {" "}All Rights Reserved.
        </div>
      </Row>
    </Container>
  );
};

export default Footer;

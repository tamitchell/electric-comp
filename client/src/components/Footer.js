import React from "react";
import { Container, Row } from "reactstrap";

const style = {
  textTransform: "lowercase"
}

const Footer = () => {
  return (
    <Container className="footer" fluid={true}>       
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
            Diversified Electric Services Inc.
          </a>
          {" "}All Rights Reserved.
        </div>
        <div>
        Contact the <a style={style} href="https://tamitchell.github.io/">developer.</a>
        </div>
      </Row>
    </Container>
  );
};

export default Footer;

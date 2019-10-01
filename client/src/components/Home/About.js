import React from "react";
import { Container, Col, Button } from "reactstrap";

const About = () => {
  return (
    <Container className="about-container" fluid={true}>
        <Col className="col" lg={5}>
          <h2>Diversified Electric Services Inc.</h2>
          <p>
          We have been serving the D.M.V metropolitan since 1994 with a range of electrical services, 
          including panel upgrades, floor build outs, new lighting installations, inspections and code 
          corrections, circuit restorations, troubleshooting, fire alarm installations, and physical 
          security system replacements. Our team has been recognized for reliability, security and 
          trustworthiness. We offer same-day services and upfront pricing quotes for that reason. 
          We understand life can hectic, which is why we work when you are available. 
          {" "}
          </p>

          <p>
            {" "}
            
          </p>
          <p>
            <em>
              Family owned and operated.
            </em>
          </p>
          <Button>About Us</Button>
        </Col>
        <Col className="d-none d-lg-block d-xl-block">
        <img src={require("../../img/cables.jpg")} alt="cables" />
        </Col>
    </Container>
  );
};

export default About;

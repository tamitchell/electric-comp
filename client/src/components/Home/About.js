import React from "react";
import { Container, Col, Button } from "reactstrap";

const About = () => {
  return (
    <Container className="about-container" fluid={true}>
        <Col className="col" lg={5}>
          <h2>Diversified Electric Services Inc.</h2>
          <p>
            We offer a range of electrical services, including panel upgrades , 
            new lighting installations, home inspections and code corrections, 
            circuit restorations, and fixture replacements. Our friendly and 
            helpful Fairfax, VA electricians are truly here to make your life 
            easier. We offer same-day services and upfront pricing quotes for 
            that reason. We also know that life can get busy, which is why we 
            work around your schedule when you need service.{" "}
          </p>

          <p>
            {" "}
            Williamsburg direct trade 3 wolf moon meggings selfies cred chambray
            art party polaroid food truck swag mixtape four loko Tonx 8-bit
            small batch street art Echo Park cray normcore slow-carb disrupt
            mlkshk actually fingerstache blog Pitchfork butcher.
          </p>
          <p>
            <em>
              * Schlitz fixie organic lo-fi authentic bicycle rights tattooed
              readymade synth Pinterest hoodie
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

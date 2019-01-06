import React from "react";
import { Container, Col, Button } from "reactstrap";

const About = () => {
  return (
    <Container className="about-container" fluid={true}>
        <Col className="col" lg={5}>
          <h2>Diversified Electric Services Inc.</h2>
          <p>
            Letterpress Austin hella Blue Bottle Bushwick iPhone aesthetic Wes
            Anderson Tumblr sartorial Vice wolf narwhal banh mi seitan
            post-ironic chia squid cardigan pour-over VHS tofu ennui deep v
            brunch ugh Neutra keytar mumblecore dreamcatcher Marfa cornhole
            craft beer chillwave trust fund paleo asymmetrical scenester Odd
            Future jean shorts put a bird on it ethical vinyl.{" "}
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

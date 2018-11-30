import React from "react";
import { Container, Row, Button } from "reactstrap";

const Hero = () => {
  return (
    <header>
      <Container className="hero-container" fluid={true}>
        <Row>
          <span>
            <h1>
              Don't be left <br /> in the Dark
            </h1>
          </span>

          <span>
            <h6>
              Interesting Tagline here.
            </h6>
          </span>

          <span>
            <Button>Contact Us</Button>
          </span>
        </Row>
      </Container>
    </header>
  );
};

export default Hero;

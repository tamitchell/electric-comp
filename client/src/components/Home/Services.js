import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Services = () => {
  return (
    <Container className="home-services-container" fluid={true}>
      <Row>
        <h3>Top Electrical Services</h3>
        <Col>
        <h3>Residential</h3>
        </Col>
        <Col>
        <h3>Commercial</h3>
        </Col>
        <Button>More Services</Button>
      </Row>
    </Container>
  );
};

export default Services;

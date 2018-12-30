import React from "react";
import { Container, Row, Button } from "reactstrap";

const Services = () => {
  return (
    <Container className="services-container" fluid={true}>
      <Row className="row-outer">
        <h3>Top Electrical Services</h3>
        <Row className="row-inner">
            <ul>
              <li>Build Outs</li>
              <li>CAT5 & CAT5E Cabling</li>
              <li>Computer & Circuits</li>
              <li>Electrical Distribution Panel Inspections</li>
              <li>Fluorescent Ballast Replacements</li>
              <li>Generators</li>
              <li>Heavy-Ups Panel Upgrades</li>
              <li>Repair, Replacement & Installation Service</li>
            </ul>
        </Row>
        <Button>More Services</Button>
      </Row>
    </Container>
  );
};

export default Services;

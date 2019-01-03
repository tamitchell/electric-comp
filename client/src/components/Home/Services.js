import React from "react";
import { Container, Row, Button } from "reactstrap";

const Services = () => {
  return (
    <Container className="services-container" fluid={true}>
      <Row className="row-outer">
        <h3>Top Electrical Services</h3>
        <Row className="row-inner">
          <ul>
            <li>
              <img
                src={require("../../img/icons/build-outs.png")}
                alt="Build Outs"
              />{" "}
              <p>Build Outs</p>
            </li>
            <li>
              <img src={require("../../img/icons/cable.png")} alt="Cabling" />
              <p>CAT5 & CAT5E Cabling</p>
            </li>
            <li>
              <img
                src={require("../../img/icons/circuit.png")}
                alt="Circuits"
              />{" "}
              <p>Computer & Circuits</p>
            </li>
            <li>
              <img
                src={require("../../img/icons/electrical-panel.png")}
                alt="Electrical Panel"
              />
              <p>Electrical Distribution Panel Inspections</p>
            </li>
            <li>
              <img
                src={require("../../img/icons/light-bulb.png")}
                alt="Light bulb"
              />
              <p>Fluorescent Ballast Replacements</p>
            </li>
            <li>
              <img
                src={require("../../img/icons/generator.png")}
                alt="Generators"
              />
              <p>Generators</p>
            </li>
            <li>
              <img
                src={require("../../img/icons/heavy-panel.png")}
                alt="Heavy Panels"
              />
              <p>Heavy-Ups Panel Upgrades</p>
            </li>
            <li>
              <img src={require("../../img/icons/repair.png")} alt="Repairs" />
              <p>Repair, Replacement & Installation Service</p>
            </li>
          </ul>
        </Row>
        <Button>More Services</Button>
      </Row>
    </Container>
  );
};

export default Services;

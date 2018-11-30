import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Services = () => {
  return (
      <Row className="row-outer">
        <h3>Top Electrical Services</h3>
        <Row className="row-inner">
          <Col>
            <h3>Residential</h3>
            <ul>
              <li>Aluminum Wire Inspections</li>
              <li>Baseboard Electric Heat Installations</li>
              <li>Ceiling Fans, Attic Fans, and Bath Exhaust Fans</li>
              <li>Circuit Breakers</li>
              <li>Compact Fluorescent Lamps</li>
              <li>Electrical (Panel) Inspections</li>
              <li>Electric Vehicle Charging Stations</li>
              <li>Heavy-Ups and Electrical Panel Upgrades</li>
              <li>Home Generators</li>
            </ul>
          </Col>
          <Col>
            <h3>Commercial</h3>
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
          </Col>
        </Row>
        <Button>More Services</Button>
      </Row>
  );
};

export default Services;

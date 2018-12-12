import React, { Component } from "react";
import Form from "./Form";
import { Container, Col, Row, Fade } from "reactstrap";

export const StyledContainer = props => {
  return (
    <Container className="red-container" fluid={true}>
      <Row>
        <Col lg={7} className="col">
          <Form />
        </Col>
      </Row>
    </Container>
  );
};

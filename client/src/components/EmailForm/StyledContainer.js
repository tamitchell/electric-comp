import React from "react";
import FormContainer from "./FormContainer";
import { Container, Col, Row, Fade } from "reactstrap";

export const StyledContainer = props => {
  return (
    <Container className="red-container" fluid={true}>
      <Row>
        <Col lg={7} className="col">
          <FormContainer />
        </Col>
      </Row>
    </Container>
  );
};

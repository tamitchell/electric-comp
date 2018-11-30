import React from "react";
import { Container } from "reactstrap";

export const ComponentStylingContainer = props => {
    console.log(props)
    return (
    <Container className={props.sumthing + } fluid={true}>
          {props.componentName}
    </Container>
  );
};

import React, { Component } from "react";
import MessageDetails from "./MessageDetails";
import PersonalDetails from "./PersonalDetails";
import MessageQueryType from "./MessageQueryType";
import FormSuccess from "./FormSucess";
import FormError from "./FormError";
import FormConfirmation from "./FormConfirmation";
import { Container, Col, Row, Fade } from "reactstrap";

export const StyledContainer = props => {
  return (
    <Container className="red-container" fluid={true}>
      <Row>
        <Col lg={7} className="col">
          <ParentForm />
        </Col>
      </Row>
    </Container>
  );
};

export class ParentForm extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      fullName: {
        firstName: "",
        lastName: ""
      },
      message: {},
      email: "",
      phoneNumber: ""
    };
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { fullName, message, email, phoneNumber } = this.state;
    const values = { fullName, message, email, phoneNumber };
    switch (step) {
      case 1:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <MessageQueryType
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <MessageDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <FormConfirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return <h1>Message Sent</h1>;
      default:
        break;
    }
  }
}

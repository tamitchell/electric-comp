import React, { Component } from "react";
import FormSuccess from "./FormSucess";
import FormError from "./FormError";
import { Button, FormGroup, Label, Input } from "reactstrap";
class Form extends Component {
  constructor() {
    super();
    this.state = {
      fullName: {
        firstName: "",
        lastName: ""
      },
      message: {},
      email: "",
      phoneNumber: ""
    };
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };


  render() {
    const { fullName, message, email, phoneNumber } = this.state;
    const values = { fullName, message, email, phoneNumber };
    return (
      <fieldset className="confirmation-form-container">
        <h4>Questions? Comments? Send Us a Message</h4>
        <h5>Be sure to take one last look to make sure everthing looks right.</h5>
        <FormGroup>
          <Input type="text" name="fullName" placeholder="First Name" />
          <Input type="text" name="fullName" placeholder="Last Name" />
        </FormGroup>
        <FormGroup>
          <Input type="text" name="subject" placeholder="Subject Line" />
        </FormGroup>
        <FormGroup>
            <Input type="textarea" placeholder="Enter text here" name="message" />
        </FormGroup>
        <Button type="submit" onClick={e => this.props.nextStep()}>Submit</Button>
      </fieldset>
    );
  }
}

export default Form

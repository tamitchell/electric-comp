import React, { Component } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
class FormConfirmation extends Component {
  render() {
    return (
      <fieldset className="confirmation-form-container">
        <h4>Message Confirmation</h4>
        <h5>Take one last look to make sure everthing looks right.</h5>
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

export default FormConfirmation;

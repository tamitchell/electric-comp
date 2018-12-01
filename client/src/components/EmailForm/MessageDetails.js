import React, { Component } from "react";
import { Button, Label, Input, FormGroup } from "reactstrap";

export class MessageDetails extends Component {
  render() {
    return (
      <FormGroup className="message-detail">
        <Label>
          <h5>What's the message?</h5>
          <Input type="textarea" placeholder="Enter text here" name="text" />
          <Button onClick={e => this.props.prevStep()}>Previous</Button>
          <Button onClick={e => this.props.nextStep()}>Next</Button>
        </Label>
      </FormGroup>
    );
  }
}

export default MessageDetails;

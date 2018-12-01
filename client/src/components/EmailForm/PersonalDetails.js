import React, { Component } from "react";
import {
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
export class PersonalDetails extends Component {
  render() {
    return (
        <div>
          <h4>Want to Chat? Shoot Us a Message</h4>
          <h5>Let's start with some contact information. What's Your Name?</h5>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Button onClick={e => this.props.nextStep()} className="right">Next</Button>
        </div>
    );
  }
}

export default PersonalDetails;

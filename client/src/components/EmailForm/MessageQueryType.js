import React, { Component } from "react";
import { Button, FormGroup } from "reactstrap";

export class MessageQueryType extends Component {
  render() {
    return (
      <fieldset>
        <FormGroup>
            <h5>Hi {}, may we ask what kind of message is this?</h5>
          <div className="form-group-wrapper">

          <FormGroup>
            <input
              type="radio"
              name="messagequery"
              value="Commercial"
              class="form-radio"
            />
            <label for="radio-one">Commercial</label>
          </FormGroup>
          <FormGroup>
            <input
              type="radio"
              name="messagequery"
              value="Residential"
              class="form-radio"
            />
            <label for="radio-one">Residential</label>
          </FormGroup>
          <FormGroup>
            <input
              type="radio"
              name="messagequery"
              value="Other"
              class="form-radio"
            />
            <label for="radio-one">Other</label>
          </FormGroup>
          </div>
          <Button onClick={e => this.props.prevStep()} className="right">
            Previous
          </Button>
          <Button onClick={e => this.props.nextStep()} className="right">
            Next
          </Button>
        </FormGroup>
      </fieldset>
    );
  }
}

export default MessageQueryType;

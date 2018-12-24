import React, { Component } from "react";
import FormValidator from "./FormValidator";
import { Button, Form, FormGroup, Input } from "reactstrap";

export default class FormComponent extends Component {
  constructor() {
    super();

    this.validator = new FormValidator([
      {
        field: "email",
        method: "isEmpty",
        validWhen: false,
        message: "Email is required."
      },
      {
        field: "email",
        method: "isEmail",
        validWhen: true,
        message: "That is not a valid email."
      },
      {
        field: "phone",
        method: "isEmpty",
        validWhen: false,
        message: "Pleave provide a phone number."
      },
      {
        field: "phone",
        method: "matches",
        args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/], // args is an optional array of arguements that will be passed to the validation method
        validWhen: true,
        message: "That is not a valid phone number."
      }
    ]);

    this.state = {
      input: {
        firstName: "",
        lastName: "",
        subject: "",
        message: "",
        email: "",
        phoneNumber: "",
      },
      validation: this.validator.valid()
    };
  }
  render() {
    let validation = this.props.formSubmitted // if the form has been submitted at least once
      ? this.validator.validate(this.state) // then check validity every time we render
      : this.state.validation; // otherwise just use what's in state

    const {
      firstName,
      lastName,
      message,
      subject,
      email,
      phoneNumber
    } = this.state;

    return (
      <Form
        className="confirmation-form-container"
        onSubmit={e => this.props.onSubmit(e)}
      >
        <h4>Questions? Comments? Send Us a Message</h4>
        <h5>
          Be sure to take one last look to make sure everthing looks right.
        </h5>
        <FormGroup>
          <Input
            type="text"
            defaultValue={firstName}
            onChange={this.props.handleChange}
            name="firstName"
            placeholder="First Name"
          />
          <Input
            type="text"
            defaultValue={lastName}
            onChange={this.props.handleChange}
            name="lastName"
            placeholder="Last Name"
          />
        </FormGroup>
        <FormGroup>
          <div className={validation.email.isInvalid && "has-error"}>
            <Input
              type="email"
              defaultValue={email}
              onChange={this.props.handleChange}
              name="email"
              placeholder="Email"
            />
            <span className="help-block">{validation.email.message}</span>
          </div>
          <div className={validation.phone.isInvalid && "has-error"}>
            <Input
              type="phone"
              defaultValue={phoneNumber}
              onChange={this.props.handleChange}
              name="phoneNumber"
              placeholder="(555) 555 - 5555"
            />
            <span className="help-block">{validation.phone.message}</span>
          </div>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            defaultValue={subject}
            onChange={this.props.handleChange}
            name="subject"
            placeholder="Subject Line"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            defaultValue={message}
            onChange={this.props.handleChange}
            placeholder="Enter text here"
            name="message"
          />
          <input type="hidden" name="*honeypot" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

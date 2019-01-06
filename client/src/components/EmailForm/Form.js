import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

export default class FormComponent extends Component {
  constructor() {
    super();
    this.state = {
      input: {
        firstName: "",
        lastName: "",
        subject: "",
        message: "",
        email: "",
        phoneNumber: "",
      }
        };
  }
  render() {
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
            required
          />
          <Input
            type="text"
            defaultValue={lastName}
            onChange={this.props.handleChange}
            name="lastName"
            placeholder="Last Name"
            required
          />
        </FormGroup>
        <FormGroup>
            <Input
              type="email"
              defaultValue={email}
              onChange={this.props.handleChange}
              name="email"
              placeholder="Email"
              required
            />
            <Input
              type="phone"
              defaultValue={phoneNumber}
              onChange={this.props.handleChange}
              name="phoneNumber"
              placeholder="(555) 555 - 5555"
              required
            />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            defaultValue={subject}
            onChange={this.props.handleChange}
            name="subject"
            placeholder="Subject Line"
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            defaultValue={message}
            onChange={this.props.handleChange}
            placeholder="Enter text here"
            name="message"
            required
          />
          <input type="hidden" name="*honeypot" />
          <input type="hidden" name="*default_email" value="DiversifiedElectricInc@gmail.com" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

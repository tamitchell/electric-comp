import React, { Component } from "react";
import FormSuccess from "./FormSucess";
import FormError from "./FormError";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const key = "oizmqt5h";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      subject: "",
      message: "",
      email: "",
      phoneNumber: ""
    };
  }

  handleChange = input => e => {
    e.preventDefault();
    this.setState({ [input]: e.target.value });
    console.log(this.state);
  };

  onSubmit = () => {
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post(`https://www.enformed.io/${key}/`)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  render() {
    const {
      firstName,
      lastName,
      message,
      subject,
      email,
      phoneNumber
    } = this.state;
    // const values = {
    //   fullName: firstName,
    //   fullName: lastName,
    //   message,
    //   subject,
    //   email,
    //   phoneNumber
    // };
    return (
      <Form
        action="https://www.enformed.io/oizmqt5h"
        method="post"
        className="confirmation-form-container"
        onSubmit={e => this.onSubmit(e)}
      >
        <h4>Questions? Comments? Send Us a Message</h4>
        <h5>
          Be sure to take one last look to make sure everthing looks right.
        </h5>
        <FormGroup>
          <Input
            type="text"
            defaultValue={firstName}
            onChange={this.handleChange}
            name="firstName"
            placeholder="First Name"
          />
          <Input
            type="text"
            defaultValue={lastName}
            onChange={this.handleChange}
            name="lastName"
            placeholder="Last Name"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            defaultValue={email}
            onChange={this.handleChange}
            name="email"
            placeholder="Email"
          />
          <Input
            type="text"
            defaultValue={phoneNumber}
            onChange={this.handleChange}
            name="phoneNumber"
            placeholder="(555) 555 - 5555"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            defaultValue={subject}
            onChange={this.handleChange}
            name="subject"
            placeholder="Subject Line"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            defaultValue={message}
            onChange={this.handleChange}
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

export default FormContainer;

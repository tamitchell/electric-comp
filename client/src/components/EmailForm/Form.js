import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { constants } from '../constants';

export default class FormComponent extends Component {
  constructor() {
    super();
    this.state = {
      input: {
        fullName: "",
        lastName: "",
        subject: "",
        message: "",
        email: "",
        phoneNumber: "",
        companyName: ""
      }
        };
  }
  render() {
    const {
      fullName,
      message,
      companyName,
      email,
      phoneNumber
    } = this.state;

    return (
      <Form
        className="confirmation-form-container"
        onSubmit={e => this.props.onSubmit(e)}
      >
        <h4>Send Us a Message</h4>
        
        <p>We take our commitment to our clients seriously. If you cannot find the answer to your questions on our site, or would like to inquire about future partnerships and projects, please do not hesitate to contact us.</p>       
        <FormGroup>
        <Label for="fullName">Full Name
          <Input
            type="text"
            defaultValue={fullName}
            onChange={this.props.handleChange}
            name="fullName"
            placeholder="Full Name"
            required
          />
        </Label>
        <Label for="companyName">Company Name (Optional) 
            <Input
              type="text"
              defaultValue={companyName}
              onChange={this.props.handleChange}
              name="companyName"
              placeholder="Company Name"
            />
        </Label>

        </FormGroup>


        <FormGroup>
        <Label for="email">Email
        
            <Input
              type="email"
              defaultValue={email}
              onChange={this.props.handleChange}
              name="email"
              placeholder="Email"
              required
            />
        </Label>


<Label for="phone">
  Phone Number
            <Input
              type="phone"
              defaultValue={phoneNumber}
              onChange={this.props.handleChange}
              name="phoneNumber"
              placeholder="(555) 555 - 5555"
              required
            />
      </Label>
          </FormGroup>
       
        <FormGroup>
        <Label for="message">
          Message
          <Input
            type="textarea"
            defaultValue={message}
            onChange={this.props.handleChange}
            placeholder="Ask us anything!"
            name="message"
            required
          />
          </Label>
        </FormGroup>
        <FormGroup className="subject-type">
          {/* <h5> Interested In </h5>
          <div className="checkbox">
            <Label for="exampleCheck" check>Partnerships
            </Label>
            <Input type="checkbox" name="check"className="checkbox"/>
          </div> */}
        <input type="hidden" name="*honeypot" />
          <input type="hidden" name="*default_email" value={constants.COMPANY_EMAIL} />
        </FormGroup>
        <Button className="form-submit-btn" type="submit">Submit</Button>
      </Form>
    );
  }
}

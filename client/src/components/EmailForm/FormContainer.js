import React, { Component } from "react";
import { FormStatus } from "./FormStatus";
import Form from "./Form";
import axios from "axios";

class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      input: {},
      status: null,
      formSubmitted: null
    };
  }

  handleChange = e => {
    e.preventDefault();
    const { input } = this.state;
    input[e.target.name] = e.target.value;
    this.setState({ input: input });
  };

  onSubmit = e => {
    e.preventDefault();
      axios.defaults.headers.post["Content-Type"] = "application/json";
      axios
        .post(`https://www.enformed.io/${process.env.REACT_APP_EMAIL_TOKEN}/`, this.state.input)
        .then(response =>
         { 
           response.statusText === "OK"
            ? this.setState({
                formSubmitted: true,
                status: true
              })
            : this.setState({
                formSubmitted: true,
                status: false
              })}
        )
        .catch(error => console.log(error));
  };

  render() {
    let status = this.state.status;
    let formSubmitted = this.state.formSubmitted;

    return (
      <div>
        {formSubmitted === true ? (
          <FormStatus status={status} />
        ) : (
          <Form
            handleChange={this.handleChange}
            formSubmitted={this.state.formSubmitted}
            onSubmit={this.onSubmit}
          />
        )}
      </div>
    );
  }
}

export default FormContainer;

import React, { Component } from "react";
import { FormStatus } from "./FormStatus";
import Form from "./Form";
import axios from "axios";

const key = "oizmqt5h";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      input: {
        firstName: "",
        lastName: "",
        subject: "",
        message: "",
        email: "",
        phoneNumber: ""
      },
      loading: false,
      success: null
    };
  }

  handleChange = e => {
    const { input } = this.state;

    input[e.target.name] = e.target.value;
    e.preventDefault();
    this.setState({ input: input });
    console.log(this.state);
  };

  onSubmit = e => {
    e.preventDefault();
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post(`https://www.enformed.io/${key}/`, this.state.input)
      .then(response =>
        response.statusText === "OK"
          ? this.setState({ success: true })
          : this.setState({ success: false })
      )
      .catch(error => console.log(error));
  };

  render() {
    let loading = this.state.loading;
    let success = this.state.success;

    return (
      <div>
        {success === true ? <FormStatus status={success}/> : <Form handleChange={this.handleChange} onSubmit={this.onSubmit} />}
      </div>
    )
  }
}

export default FormContainer;

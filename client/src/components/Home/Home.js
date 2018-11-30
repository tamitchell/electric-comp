import React, { Component } from "react";
import Hero from "./Hero.js";
import About from "./About";
import Services from "./Services";
import { StyledContainer } from '../EmailForm/ParentForm';
export default class Home extends Component {
  render() {
    return (
      <main>
        <Hero />
        <About />
        <Services />
        <StyledContainer />
      </main>
    );
  }
}

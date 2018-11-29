import React, { Component } from "react";
import Hero from "./Hero.js";
import About from "./About";
import Services from "./Services";
export default class Home extends Component {
  render() {
    return (
      <main>
        <Hero />
        <About />
        <Services />
      </main>
    );
  }
}

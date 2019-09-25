import React, { Component } from "react";
import Hero from "./Hero.js";
export default class Home extends Component {
  toggleTable = () => {
    let isOpen = true;
    let clicked = !isOpen
    return clicked
  }

  render() {
    return (
      <main>
        <Hero toggleTable={this.toggleTable} />
      </main>
    );
  }
}

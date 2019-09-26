import React, { Component } from "react";
import Hero from "./Hero.js";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  
  toggleTable = () => {
    this.state.isOpen = !this.state.isOpen;
  }

  render() {
    return (
      <main>
        <Hero toggleTable={this.toggleTable} isOpen={this.state.isOpen} />
      </main>
    );
  }
}

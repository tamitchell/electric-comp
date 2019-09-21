import React, { Component } from "react";
import Hero from "./Hero.js";
// import About from "./About";
// import Services from "./Services";
// import MeetTheTeam from "./MeetTheTeam";
// import { StyledContainer } from "../EmailForm/StyledContainer";

export default class Home extends Component {
  toggleTable = () => {
    let isOpen = true;
    let clicked = !isOpen
    return clicked
  }

  render() {
    const style = {borderColor: 'red', borderWidth: 1}
    return (
      <main style={style}>
        <Hero toggleTable={this.toggleTable} />
      </main>
    );
  }
}

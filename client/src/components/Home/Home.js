import React, { Component } from "react";
import Hero from "./Hero.js";
import About from "./About";
import Services from "./Services";
import MeetTheTeam from "./MeetTheTeam";
import { StyledContainer } from "../EmailForm/StyledContainer";
export default class Home extends Component {
  render() {
    return (
      <main>
        <Hero />
        <About />
        <Services />
        <StyledContainer />
        {/*  */}
      </main>
    );
  }
}

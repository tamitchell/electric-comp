import React, { Component } from "react";
import Hero from "./Hero.js";
import About from "./About";
import Services from "./Services";
import {ComponentStylingContainer} from '../Containers/Container'
export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      homeComponents: [
      {name: ['hero', 'about', 'services']},
      {component: [<Hero />,<About />,<Services />]}
    ]
    }
  }
  render() {
    let components = this.state.homeComponents
   let result = components.map((obj, i) => {
    return  <ComponentStylingContainer className={obj.ame + '-container'} key={i} componentName={obj.component} />
    })
    return (
      <main>
        {result}
      </main>
    );
  }
}

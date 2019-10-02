import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./Navigation.js";
import Footer from "./Footer";
import asyncComponent from './AsyncComponent';
import MemberItem from './About/MemberItem';
import NotFound from './404NotFound'
import "../sass/App.scss";


const Home = asyncComponent(() =>
import('./Home/Home').then(module => module.default)
)
const About = asyncComponent(() =>
import('./About/About').then(module => module.default)
)
const Services = asyncComponent(() => 
import('./Services/Services').then(module => module.default)
)

const Experience = asyncComponent(() =>
import('./Experience/ExperienceContainer').then(module => module.default))
class App extends Component {
  
  render() {
    return (
      <div className="App">
          <Navigation/>
        <div className="app-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services}/>
          <Route path="/members/:memberName" component={MemberItem}/>
          <Route exact path="/experience" component={Experience}/>
          <Route component={NotFound} />
        </Switch>
      </div>
        <Footer/>
      </div>
    );
  }
}

export default App;

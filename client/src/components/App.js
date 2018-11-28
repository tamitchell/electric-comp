import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Navigation.js";
import asyncComponent from './AsyncComponent'
import "../sass/App.scss";

const Home = asyncComponent(() =>
    import('./Home').then(module => module.default)
)
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;

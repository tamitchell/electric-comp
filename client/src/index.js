import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App.js";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

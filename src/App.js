import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

import home from "./containers/home/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={home} exact />
        <Route path="/signup">
          <h1>Sign up page</h1>
        </Route>
        <Route path="/login">
          <h1>Login page</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

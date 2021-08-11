import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

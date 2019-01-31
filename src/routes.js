import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import CharDetails from "./components/CharDetails";

export default (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/char/:id" component={CharDetails} />
  </Switch>
);

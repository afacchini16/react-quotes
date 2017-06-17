import React from "react";

import Add from "../components/Parents/AddQuoteParent"
import Favorite from "../components/Parents/FavoritedParent";

import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";

// Using just one route for now
// NOTE: browserHistory only works when run with a server
// build the webpack project, start the server, and navigate to localhost:3000
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="add" component={Add}></Route>
      <Route path="favorite" component={Favorite}></Route>
      <IndexRoute component={Add}></IndexRoute>
    </Route>
  </Router>
);

module.exports = routes;

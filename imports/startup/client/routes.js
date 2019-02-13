import React from "react";
import { Router, Route, Switch } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

// route components
import Main from "../../ui/layouts/Main";
import Home from "../../ui/pages/Home";
import AboutUs from "../../ui/pages/AboutUs";

const browserHistory = createBrowserHistory();

const routes = (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={AboutUs} />
  </div>
);

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Main content={routes} />
    </Switch>
  </Router>
);

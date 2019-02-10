import React from "react";
import { FlowRouter } from "meteor/kadira:flow-router";
import { mount } from "react-mounter";
import App from "../imports/ui/layouts/App";
import HomePage from "../imports/ui/pages/HomePage";
// Set up all routes in the app
FlowRouter.route("/", {
  name: "home",
  action() {
    mount(App, {
      content: <HomePage />
    });
  }
});

// FlowRouter.notFound = {
//   action() {
//     BlazeLayout.render("App_body", { main: "App_notFound" });
//   }
// };

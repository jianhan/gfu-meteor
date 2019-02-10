import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import "../node_modules/@atlaskit/css-reset/dist/bundle.css";

import App from "../imports/ui/layouts/App";

Meteor.startup(() => {
  render(<App />, document.getElementById("render-target"));
});

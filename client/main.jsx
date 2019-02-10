import "../node_modules/@atlaskit/css-reset/dist/bundle.css";

import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { renderRoutes } from "../imports/startup/client/routes.js";

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById("app"));
});

// Import server startup through a single index entry point
ServiceConfiguration.configurations.upsert(
  {
    service: "github"
  },
  {
    $set: {
      clientId: Meteor.settings.oauth.github.clientId,
      loginStyle: "popup",
      secret: Meteor.settings.oauth.github.secret
    }
  }
);

import "./fixtures.js";
import "./register-api.js";
import "./methods/auth.js";

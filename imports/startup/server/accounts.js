import { Accounts } from "meteor/accounts-base";

Accounts.onCreateUser(function(options, user) {
  if (!("profile" in options)) {
    options.profile = {};
  }
  if (!("providers" in options.profile)) {
    options.profile.providers = {};
  }

  // Define additional specific profile options here
  if (user.services.github) {
    options.profile.providers.github = {
      name: user.services.github.username,
      email: user.services.github.email
    };
    options.profile.name = user.services.github.username;
    options.profile.email = user.services.github.email;
  }
  user.profile = options.profile;

  return user;
});

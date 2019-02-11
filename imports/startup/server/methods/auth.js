import { Meteor } from "meteor/meteor";

Meteor.methods({
  getUserData() {
    const services = Meteor.user().services;
    const username = services.github.username;
    const email = services.github.email;
    return {
      username,
      email
    };
  }
});

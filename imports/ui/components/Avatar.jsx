import { Meteor } from "meteor/meteor";
import React from "react";
import PropTypes from "prop-types";

export default class Avatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null
    };
  }
  render() {
    let username = "";
    if (this.state.userData) {
      username = this.state.userData.username;
    }

    return <p>{username}</p>;
  }

  componentWillMount() {
    Meteor.call("getLoggedInNameAndEmail", (err, userData) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({ userData });
      }
    });
  }
}

Avatar.propTypes = {
  user: PropTypes.object
};

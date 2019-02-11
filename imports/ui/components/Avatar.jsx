import { Meteor } from "meteor/meteor";
import React from "react";
import PropTypes from "prop-types";

export default class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let name = "";
    if (this.props.userData) {
      name = this.props.userData.profile.name;
    }

    return <p>{name}</p>;
  }
}

Avatar.propTypes = {
  userData: PropTypes.object
};

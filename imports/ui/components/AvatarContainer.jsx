import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import Avatar from "./Avatar";

const AvatarContainer = withTracker(() => {
  console.log(Meteor.user());
  return {
    user: Meteor.user()
  };
})(Avatar);

export default AvatarContainer;

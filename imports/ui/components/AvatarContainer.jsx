import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import Avatar from "./Avatar";

const AvatarContainer = withTracker(() => {
  const returnObj = {
    user: null
  };

  Meteor.call("getLoggedInNameAndEmail", (err, nameAndEmail) => {
    returnObj.user = nameAndEmail;
  });

  return returnObj;
})(Avatar);

export default AvatarContainer;

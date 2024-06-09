const userModel1 = require("../models/userModel");

const uploadProductPermission = async (userID) => {
  const user = await userModel1.findById(userID);
  if (user.role !== "ADMIN") {
    return false;
  }
  return true;
};

module.exports = uploadProductPermission;

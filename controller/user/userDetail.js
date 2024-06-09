const userModel1 = require("../../models/userModel");

async function userDetailsController(req, res) {
  try {
    console.log("userId", req.userId);

    const user = await userModel1.findById(req.userId);
    console.log("user", user);
    res.status(200).json({
      data: user,
      error: false,
      success: true,
      message: "User Detail",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

module.exports = userDetailsController;

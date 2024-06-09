const userModel1 = require("../../models/userModel");

async function allusers(req, res) {
  try {
    console.log("userid all Users", req.userId);
    // const response = await fetch("http://localhost:8080/api/all-users");
    const allusers = await userModel1.find();
    res.json({
      message: "all User",
      data: allusers,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || "An error occurred.",
      error: true,
      success: false,
    });
  }
}

module.exports = allusers;

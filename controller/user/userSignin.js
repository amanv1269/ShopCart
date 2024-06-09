const bcrypt = require("bcryptjs");
const userModel1 = require("../../models/userModel");
const jwt = require("jsonwebtoken");

async function userSignInController(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please provide email, password,");
    }

    const user = await userModel1.findOne({ email });

    if (!user) {
      throw new Error("User not Valid");
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    console.log("checkPassword", checkPassword);

    if (checkPassword) {
      const tokenData = {
        _id: user._id,
        email: user.email,
      };
      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {
        expiresIn: 60 * 60 * 8,
      });

      const tokenOption = {
        httpOnly: true,
        secure: true,
      };

      res.cookie("token", token, tokenOption).json({
        message: "Login Sucssfully",
        data: token,
        success: true,
        error: false,
      });
    } else {
      throw new Error("Please check password");
    }
  } catch (error) {
    res.status(400).json({
      message: error.message || "An error occurred.",
      error: true,
      success: false,
    });
  }
}

module.exports = userSignInController;

// const userModel = require("../models/userModel");
// const bcrypt = require("bcryptjs");

// async function userSignUpController(req, res) {
//   try {
//     const { email, password, name } = req.body;
//     const user = await userModel.findOne({ email });
//     console.log("user", user);
//     if (user) {
//       throw new Error("This Email Allready Registered");
//     }

//     if (!email) {
//       throw new Error("Please provide email");
//     }
//     if (!password) {
//       throw new Error("Please provide password");
//     }
//     if (!name) {
//       throw new Error("Please provide name");
//     }
//     const salt = bcrypt.genSaltSync(10);
//     const hashpassword = await bcrypt.hashSync(password, salt);

//     if (!hashpassword) {
//       throw new Error("something is Wrong");
//     }

//     const payload = {
//       ...req.body,
//       password: hashpassword,
//     };

//     const userData = new userModel1(payload);
//     const saveUser = await userData.save();

//     res.status(201).json({
//       data: saveUser,
//       success: true,
//       error: false,
//       message: "User Created Succesfully",
//     });
//   } catch (err) {
//     res.json({
//       message: err.message || err,
//       error: true,
//       success: false,
//     });
//   }
// }

// module.exports = userSignUpController;

const userModel = require("../../models/userModel"); // Make sure this is the correct import
const bcrypt = require("bcryptjs");

async function userSignUpController(req, res) {
  try {
    const { email, password, name } = req.body;

    const user = await userModel.findOne({ email });

    console.log("user", user);

    if (user) {
      throw new Error("Already user exits.");
    }

    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }
    if (!name) {
      throw new Error("Please provide name");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(password, salt);

    if (!hashPassword) {
      throw new Error("Something is wrong");
    }

    const payload = {
      ...req.body,
      role: "GENERAL",
      password: hashPassword,
    };

    const userData = new userModel(payload);
    const saveUser = await userData.save();

    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User created Successfully!",
    });
  } catch (err) {
    // Handle errors
    res.status(400).json({
      message: err.message || "An error occurred.",
      error: true,
      success: false,
    });
  }
}

module.exports = userSignUpController;

const prodcutModel = require("../../models/productModel");

const getProductController = async (req, res) => {
  try {
    const allProduct = await prodcutModel.find().sort({ createdAt: -1 });
    res.json({
      message: "all product",
      success: true,
      error: false,
      data: allProduct,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = getProductController;

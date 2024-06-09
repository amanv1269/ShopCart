const uploadProductPermission = require("../../helper/permission");
const prodcutModel = require("../../models/productModel");

async function updateProductControlller(req, res) {
  try {
    if (!uploadProductPermission(req.userId)) {
      throw new Error("permission denied");
    }
    const { _id, ...resBody } = req.body;
    const updateProduct = await prodcutModel.findByIdAndUpdate(_id, resBody);
    res.json({
      message: "Product Updated succesfully",
      data: updateProduct,
      error: false,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = updateProductControlller;

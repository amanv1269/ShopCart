const prodcutModel = require("../../models/productModel");
const filterProductController = async (req, res) => {
  try {
    const categoryList = req?.body?.category || [];

    const product = await prodcutModel.find({
      category: {
        $in: categoryList,
      },
    });

    res.json({
      data: product,
      message: "product",
      error: false,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

module.exports = filterProductController;

const prodcutModel = require("../../models/productModel");

const getCategoryProductOne = async (req, res) => {
  try {
    const productCategory = await prodcutModel.distinct("category");
    console.log("category", productCategory);
    // console.log("infinite loop running");
    const productByCategory = [];
    for (const category of productCategory) {
      const product = await prodcutModel.findOne({ category });

      if (product) {
        productByCategory.push(product);
      }
    }
    res.json({
      message: "category product",
      data: productByCategory,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = getCategoryProductOne;

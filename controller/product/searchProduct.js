const prodcutModel = require("../../models/productModel");
const serachProduct = async (req, res) => {
  try {
    const query = req.query.q;
    const regex = new RegExp(query, "i", "g");
    const product = await prodcutModel.find({
      $or: [
        {
          prouctName: regex,
        },
        {
          category: regex,
        },
        {
          brandName: regex,
        },
      ],
    });
    res.json({
      data: product,
      message: "search Product List",
      error: false,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = serachProduct;

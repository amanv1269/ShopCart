const addToCartModel = require("../../models/cartModel");

const countAddToCartProdcut = async (req, res) => {
  try {
    const userId = req.userId;
    const count = await addToCartModel.countDocuments({
      userId: userId,
    });
    res.json({
      data: { count: count },
      message: "ok",
      error: false,
      sucess: true,
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = countAddToCartProdcut;

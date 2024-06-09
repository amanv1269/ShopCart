const addToCartModel = require("../../models/cartModel");

const deleteAddToCartProduct = async (req, res) => {
  try {
    const currentUserId = req.userId;
    const addToCartProductId = req.body._id;

    const deleteProduct = await addToCartModel.deleteOne({
      _id: addToCartProductId,
    });
    res.json({
      message: "product delted from cart ",
      data: deleteProduct,
      error: false,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error?.message || error,
      succes: false,
      error: true,
    });
  }
};
module.exports = deleteAddToCartProduct;

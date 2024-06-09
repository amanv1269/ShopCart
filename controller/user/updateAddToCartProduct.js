const addToCartModel = require("../../models/cartModel");

const updateAddCartProduct = async (req, res) => {
  try {
    const currenUserId = req.userId;
    const addToCartProductId = req?.body?._id;
    const qty = req.body.quantity;
    const updatePrduct = await addToCartModel.updateOne(
      { _id: addToCartProductId },
      {
        ...(qty && { quantity: qty }),
      }
    );

    response.json({
      message: "quantity Added",
      data: updatePrduct,
      error: false,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error?.message || error,
      error: true,
      success: false,
    });
  }
};
module.exports = updateAddCartProduct;

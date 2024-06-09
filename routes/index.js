const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/user/userSignup");
const userSignInController = require("../controller/user/userSignin");
const userDetailsController = require("../controller/user/userDetail");
const authToken = require("../middlewares/authToken");
const userLogout = require("../controller/user/userLogout");
const allusers = require("../controller/user/alluser");
const updateUser = require("../controller/user/updateuser");
const UploadProductController = require("../controller/product/uploadProduct");
const getProductController = require("../controller/product/getProduct");
const updateProductControlller = require("../controller/product/UpdateProduct");
const getCategoryProductOne = require("../controller/product/getCategoryProductOne");
const getCategoryWiseProduct = require("../controller/product/getCategoryWiseProduct");
const getProductDetails = require("../controller/product/getProductDetails");
const addToCartController = require("../controller/user/addToCartController");
const countAddToCartProdcut = require("../controller/user/countAddToCartProduct");
const addToCartViewProduct = require("../controller/user/addToCartViewProduct");
const updateAddCartProduct = require("../controller/user/updateAddToCartProduct");
const deleteAddToCartProduct = require("../controller/user/deleteAddToCartproduct");
const serachProduct = require("../controller/product/searchProduct");
const filterProductController = require("../controller/product/filterProduct");

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-detail", authToken, userDetailsController);
router.get("/userLogout", userLogout);
//Admin Panel
router.get("/all-users", authToken, allusers);
router.post("/update-user", authToken, updateUser);
//product
router.post("/upload-product", authToken, UploadProductController);
router.get("/get-product", getProductController);
router.post("/update-product", authToken, updateProductControlller);
router.get("/get-categoryProduct", getCategoryProductOne);
router.post("/category-product", getCategoryWiseProduct);
router.post("/product-details", getProductDetails);
router.get("/search", serachProduct);
router.post("/filter-product", filterProductController);

// user add to cart
router.post("/addtocart", authToken, addToCartController);
router.get("/countAddToProduct", authToken, countAddToCartProdcut);
router.get("/view-cart-product", authToken, addToCartViewProduct);
router.post("/update-cart-product", authToken, updateAddCartProduct);
router.post("/delete-cart-product", authToken, deleteAddToCartProduct);

module.exports = router;

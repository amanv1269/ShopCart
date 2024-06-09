const backendDomain = "http://localhost:8080";

const SummaryApi = {
  SignUp: {
    url: `${window.location.origin}/api/signup`,
    method: "post",
  },
  SignIn: {
    url: `${window.location.origin}/api/signin`,
    method: "post",
  },
  current_user: {
    url: `${window.location.origin}/api/user-detail`,
    method: "get",
  },
  logout_user: {
    url: `${window.location.origin}/api/userLogout`,
    method: "get",
  },
  allusers: {
    url: `${window.location.origin}/api/all-users`,
    method: "get",
  },
  updateUser: {
    url: `${window.location.origin}/api/update-user`,
    method: "post",
  },
  UploadProduct: {
    url: `${window.location.origin}/api/upload-product`,
    method: "post",
  },
  allProduct: {
    url: `${window.location.origin}/api/get-product`,
    method: "get",
  },
  updateProduct: {
    url: `${window.location.origin}/api/update-product`,
    method: "post",
  },
  categoryProduct: {
    url: `${window.location.origin}/api/get-categoryProduct`,
    method: "get",
  },
  categoryWiseProduct: {
    url: `${window.location.origin}/api/category-product`,
    method: "post",
  },
  productDetails: {
    url: `${window.location.origin}/api/product-details`,
    method: "post",
  },

  addToCart: { url: `${window.location.origin}/api/addtocart`, method: "post" },
  addToProductCount: {
    url: `${window.location.origin}/api/countAddToProduct`,
    method: "get",
  },
  addToCartProductView: {
    url: ` ${window.location.origin}/api/view-cart-product`,
    method: "get",
  },
  updateCartProduct: {
    url: ` ${window.location.origin}/api/update-cart-product`,
    method: "post",
  },
  deleteCartProduct: {
    url: ` ${window.location.origin}/api/delete-cart-product`,
    method: "post",
  },
  searchProduct: {
    url: ` ${window.location.origin}/api/search`,
    method: "get",
  },
  filterProduct: {
    url: ` ${window.location.origin}/api/filter-product`,
    method: "post",
  },
};

export default SummaryApi;

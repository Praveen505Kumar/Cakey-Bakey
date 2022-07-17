const express = require("express");
const router = express.Router();
const { getProductById, createProduct, getProduct, getProductImage, getAllProducts, updateProduct, deleteProduct } = require("../controllers/product");
const { getUserById } = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth")

router.param("productId", getProductById);
router.param("userId", getUserById);

router.post("/product/create/:userId", isSignedIn, isAuthenticated, isAdmin, createProduct);
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", getProductImage);
router.get("/products", getAllProducts);
router.put("/product/:productId/:userId", isSignedIn, isAuthenticated, isAdmin, updateProduct);
router.delete("/product/:productId/:userId", isSignedIn, isAuthenticated, isAdmin, deleteProduct);
// todo  add security by allowing only to admin user to perform crud operations on products

module.exports = router;
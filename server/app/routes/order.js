const express = require("express");
const router = express.Router();
const { getUserById, pushOrderInPurchaseList } = require("../controllers/user");
const { getOrderById, createOrder, getAllOrders, getOrderStatus, updateStatus, getAllOrdersByUser } = require("../controllers/order");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth")

router.param("orderId", getOrderById);
router.param("userId", getUserById);

router.post("/order/create/:userId", isSignedIn, isAuthenticated, pushOrderInPurchaseList, createOrder);
router.get("/order/all/:userId", isSignedIn, isAuthenticated, isAdmin, getAllOrders);
router.get("/order/all/user/:userId", isSignedIn, isAuthenticated, getAllOrdersByUser);
router.get("/order/status/:userId", isSignedIn, isAuthenticated, isAdmin, getOrderStatus);
router.get("/order/:orderId/status/:userId", isSignedIn, isAuthenticated, isAdmin, updateStatus);

module.exports = router;
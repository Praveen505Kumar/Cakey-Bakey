const expresss = require("express");
const router = expresss.Router();
const { getUserById, getUser, updateUser, userPurchaseList, getAllUsers, deleteUser } = require("../controllers/user")
const { isSignedIn, isAuthenticated } = require("../controllers/auth")

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.get("/users", getAllUsers);
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);
router.delete("/admin/:userId", isSignedIn, isAuthenticated, deleteUser);

// user order list
router.get("/order/user/:userId", isSignedIn, isAuthenticated, userPurchaseList);

module.exports = router;
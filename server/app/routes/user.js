const expresss = require("express");
const router = expresss.Router();
const { getUserById, getUser, updateUser, userPurchaseList, getAllUsers, deleteUser } = require("../controllers/user")
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth")

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.get("/users", getAllUsers);
router.put("/user/:userId", isSignedIn, isAuthenticated, isAdmin, updateUser);
router.delete("/admin/:userId", isSignedIn, isAuthenticated, isAdmin, deleteUser);

// user order list
router.get("/order/user/:userId", isSignedIn, isAuthenticated, userPurchaseList);

module.exports = router;
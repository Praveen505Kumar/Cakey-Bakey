const express = require("express");
const router = express.Router();
const { createAddress, getAddress, updateAddress } = require("../controllers/address");
const { getUserById } = require("../controllers/user");
const { isSignedIn, isAuthenticated } = require("../controllers/auth")


router.param("userId", getUserById);

router.post("/address/create/:userId", isSignedIn, isAuthenticated, createAddress);
router.get("/address/:userId", isSignedIn, isAuthenticated, getAddress);
router.post("/address/update/:userId", isSignedIn, isAuthenticated, updateAddress);


module.exports = router;
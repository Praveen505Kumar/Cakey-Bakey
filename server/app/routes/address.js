const express = require("express");
const router = express.Router();
const { createAddress } = require("../controllers/address");
const { getUserById } = require("../controllers/user");
const { isSignedIn, isAuthenticated } = require("../controllers/auth")


router.param("userId", getUserById);

router.post("/address/create/:userId", isSignedIn, isAuthenticated, createAddress);

module.exports = router;
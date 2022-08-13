const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { createAddress, getAddress, updateAddress } = require("../controllers/address");
const { getUserById } = require("../controllers/user");
const { isSignedIn, isAuthenticated } = require("../controllers/auth")


router.param("userId", getUserById);

router.post("/address/create/:userId", [
    check("pincode", "PinCode shoud be 6 digits").isLength({ min: 6, max: 6 }),
    check("phoneno", "Phone number must contain 10 digits").isLength({ min: 10, max: 10 })
], isSignedIn, isAuthenticated, createAddress);

router.get("/address/:userId", isSignedIn, isAuthenticated, getAddress);

router.post("/address/update/:userId", [
    check("pincode", "PinCode shoud be 6 digits").isLength({ min: 6, max: 6 }),
    check("phoneno", "Phone number must contain 10 digits").isLength({ min: 10, max: 10 })
], isSignedIn, isAuthenticated, updateAddress);


module.exports = router;
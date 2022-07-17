const express = require("express");
const router = express.Router();
const { getCategoryById, createCategory, getCategory, getAllCategories, updateCategory, deleteCategory } = require("../controllers/category");
const { getUserById } = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth")

router.param("categoryId", getCategoryById);
router.param("userId", getUserById);

router.post("/category/create/:userId", isSignedIn, isAuthenticated, isAdmin, createCategory);
router.get("/category/:categoryId", getCategory);
router.get("/categories", getAllCategories);
router.put("/category/:categoryId/:userId", isSignedIn, isAuthenticated, isAdmin, updateCategory);
router.delete("/category/:categoryId/:userId", isSignedIn, isAuthenticated, isAdmin, deleteCategory);
// todo  add security by allowing only to admin user to perform crud operations on categories

module.exports = router;
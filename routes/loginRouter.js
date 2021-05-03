const express = require("express");
const router = express.Router();
const login = require("../controllers/login");

router.get("/", login.loginForm);
router.post("/", login.loginWithUser);

//! ADMIN
router.get("/admin", login.adminLoggedIn);
// Create a New user  
router.post("/admin", login.createNewUser);
// Update User 
router.get("/admin/update/:id", login.updateUser1);
// Updated user
router.post("/admin/update/:id", login.updatedUser);
// Delete User 
router.get("/admin/delete/:id", login.deleteUser);

//! USER
router.get("/user", login.loginUser);
// Add Product User 
router.post("/user", login.addProduct);
// Update Product User
router.get("/user/update/:id", login.updateProduct1);
// Updated Product User
router.post("/user/update/:id", login.updatedProduct);

// Delete Product User
router.get("/user/delete/:id", login.deleteProduct);
module.exports = router;
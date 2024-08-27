// src/routes/userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// Route definitions
router.post("/users", userController.createUser);
router.post("/users/login", userController.loginUser); // Make sure this route is correctly defined
router.post(
  "/users/logout",
  userController.verifyToken,
  userController.logoutUser
);

// Protected routes
router.get("/users", userController.verifyToken, userController.getUsers);
router.get(
  "/users/:id",
  userController.verifyToken,
  userController.getUserById
);
router.put("/users/:id", userController.verifyToken, userController.updateUser);
router.delete(
  "/users/:id",
  userController.verifyToken,
  userController.deleteUser
);

module.exports = router;

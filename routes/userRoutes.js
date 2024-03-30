const express = require("express");
const router = express.Router();
const {
  register,
  login,
  forget,
  resetPassword,
  getUsers,
} = require("../controllers/userController");
const { verifyToken } = require("../services/authServices");

router.post("/register", register);
router.post("/login", login);
router.post("/forget", forget);
router.post("/reset-password", resetPassword);
router.get("/users", verifyToken, getUsers);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  register,
  login,
  forget,
  resetPassword,
} = require("../controllers/userController");

router.post("/register", register);
router.post("/login", login);
router.post("/forget", forget);
router.post("/reset-password", resetPassword);

module.exports = router;

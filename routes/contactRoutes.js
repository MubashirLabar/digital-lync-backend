const express = require("express");
const router = express.Router();
const { verifyToken } = require("../services/authServices");
const {
  createContact,
  getAllContacts,
} = require("../controllers/contactController");

router.post("/create-contact", verifyToken, createContact);
router.get("/all-contacts", verifyToken, getAllContacts);

module.exports = router;

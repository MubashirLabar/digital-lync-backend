const express = require("express");
const router = express.Router();
const { verifyToken } = require("../services/authServices");
const {
  createContact,
  getAllContacts,
  updateContact,
  deleteContacts,
} = require("../controllers/contactController");

router.post("/create-contact", verifyToken, createContact);
router.post("/update-contact", verifyToken, updateContact);
router.get("/all-contacts", verifyToken, getAllContacts);
router.post("/delete-contacts", verifyToken, deleteContacts);

module.exports = router;

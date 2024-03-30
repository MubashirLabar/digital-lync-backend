const express = require("express");
const router = express.Router();
const { verifyToken } = require("../services/authServices");
const {
  createContact,
  getAllContacts,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

router.post("/create-contact", verifyToken, createContact);
router.post("/update-contact", verifyToken, updateContact);
router.get("/all-contacts", verifyToken, getAllContacts);
router.get("/delete-contact/:id", verifyToken, deleteContact);

module.exports = router;

const express = require("express");
const router = express.Router();
const { verifyToken } = require("../services/authServices");
const {
  createContact,
  getAllContacts,
  updateContact,
  deleteContacts,
} = require("../controllers/contactController");

/**
 * @openapi
 * '/api/create-contact':
 *  post:
 *     tags:
 *     - Contact Routes
 *     summary: Create Contact
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateContactInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateContactResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post("/create-contact", verifyToken, createContact);

/**
 * @openapi
 * '/api/update-contact':
 *  post:
 *     tags:
 *     - Contact Routes
 *     summary: Update Contact
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/UpdateContactInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateContactResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post("/update-contact", verifyToken, updateContact);

/**
 * @openapi
 * /api/all-contacts:
 *  get:
 *     tags:
 *     - Contact Routes
 *     summary: Get all contact
 *     description: Get all contact
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/all-contacts", verifyToken, getAllContacts);

/**
 * @openapi
 * '/api/delete-contacts':
 *  post:
 *     tags:
 *     - Contact Routes
 *     summary: Delete Contact
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/DeleteContactInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/DeleteContactResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post("/delete-contacts", verifyToken, deleteContacts);

module.exports = router;

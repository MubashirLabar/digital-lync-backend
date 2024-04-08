const express = require("express");
const router = express.Router();
const {
  createTrack,
  getTracksByUserId,
  deleteTrackById,
} = require("../controllers/trackingController");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

const { verifyToken } = require("../services/authServices");

/**
 * @openapi
 * '/api/tracks/create-track':
 *  post:
 *     tags:
 *     - Tracking Routes
 *     summary: Create Tracking
 *     requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *           schema:
 *              $ref: '#/components/schemas/CreateTrackingInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateTrackingResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post("/tracks/create-track", upload.single("file"), createTrack);

/**
 * @openapi
 * '/api/tracks/user/{userId}':
 *  get:
 *     tags:
 *     - Tracking Routes
 *     summary: Get a tracking by userId
 *     parameters:
 *      - name: userId
 *        in: path
 *        description: The userId of the track
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/TrackingByUserIdResponse'
 *       404:
 *         description: Contact not found
 */
router.get("/tracks/user/:userId", getTracksByUserId);

/**
 * @openapi
 * '/api/tracks/delete/{id}':
 *  get:
 *     tags:
 *     - Tracking Routes
 *     summary: Delete Tracking by the tracking id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the tracking
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/DeleteTrackingResponse'
 *       404:
 *         description: Contact not found
 */
router.get("/tracks/delete/:id", deleteTrackById);

module.exports = router;

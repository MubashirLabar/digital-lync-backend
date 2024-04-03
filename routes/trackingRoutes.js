const express = require("express");
const router = express.Router();
const {
  createTrack,
  getTracksByUserId,
  deleteTrackById
} = require("../controllers/trackingController");
const multer = require('multer');

const upload = multer({ dest: 'uploads/' })

const { verifyToken } = require("../services/authServices");

router.post("/tracks/create-track",upload.single('file'), createTrack);
router.get('/tracks/user/:userId', getTracksByUserId);
router.post('/tracks/deletetrackbyid', deleteTrackById);


module.exports = router;

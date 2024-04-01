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

router.post("/create-track",upload.single('file'), createTrack);
router.get('/tracks/user/:userId', getTracksByUserId);
router.delete('/tracks/:id', deleteTrackById);


module.exports = router;

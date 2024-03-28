const express = require("express");
const router = express.Router();
const { verifyToken } = require("../services/authServices");
const {
  createTask,
  getAllTasks,
  createEvent,
  getAllEvents,
  createEmail,
  getAllEmails,
} = require("../controllers/activityController");

router.post("/create-task", verifyToken, createTask);
router.get("/all-tasks", verifyToken, getAllTasks);

router.post("/create-event", verifyToken, createEvent);
router.get("/all-events", verifyToken, getAllEvents);

router.post("/create-email", verifyToken, createEmail);
router.get("/all-emails", verifyToken, getAllEmails);

module.exports = router;

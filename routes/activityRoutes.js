const express = require("express");
const router = express.Router();
const { verifyToken } = require("../services/authServices");
const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
  createMeeting,
  getAllMeetings,
  createEmail,
  getAllEmails,
} = require("../controllers/activityController");

router.post("/create-task", verifyToken, createTask);
router.post("/update-task", verifyToken, updateTask);
router.get("/all-tasks", verifyToken, getAllTasks);
router.get("/delete-task/:id", verifyToken, deleteTask);

router.post("/create-meeting", verifyToken, createMeeting);
router.get("/all-meetings", verifyToken, getAllMeetings);

router.post("/create-email", verifyToken, createEmail);
router.get("/all-emails", verifyToken, getAllEmails);

module.exports = router;

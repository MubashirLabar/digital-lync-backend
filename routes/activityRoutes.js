const express = require("express");
const router = express.Router();
const { verifyToken } = require("../services/authServices");
const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTasks,
  createMeeting,
  getAllMeetings,
  updateMeeting,
  deleteMeetings,
  createEmail,
  getAllEmails,
  deleteEmails,
} = require("../controllers/activityController");

router.post("/create-task", verifyToken, createTask);
router.post("/update-task", verifyToken, updateTask);
router.get("/all-tasks", verifyToken, getAllTasks);
router.post("/delete-tasks", verifyToken, deleteTasks);

router.post("/create-meeting", verifyToken, createMeeting);
router.get("/all-meetings", verifyToken, getAllMeetings);
router.post("/update-meeting", verifyToken, updateMeeting);
router.post("/delete-meetings", verifyToken, deleteMeetings);

router.post("/create-email", verifyToken, createEmail);
router.get("/all-emails", verifyToken, getAllEmails);
router.post("/delete-emails", verifyToken, deleteEmails);

module.exports = router;

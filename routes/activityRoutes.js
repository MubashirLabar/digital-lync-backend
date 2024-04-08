const express = require("express");
const router = express.Router();
const { verifyToken } = require("../services/authServices");
const {
  createTask,
  getAllTasks,
  getTaskDetail,
  updateTask,
  deleteTasks,
  createMeeting,
  getAllMeetings,
  getMeetingDetail,
  updateMeeting,
  deleteMeetings,
  createEmail,
  getAllEmails,
  getEmailDetail,
  deleteEmails,
} = require("../controllers/activityController");

/**
 * @openapi
 * '/api/create-task':
 *  post:
 *     tags:
 *     - Task Routes
 *     summary: Create Task
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateTaskInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateTaskResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post("/create-task", verifyToken, createTask);

/**
 * @openapi
 * '/api/update-task':
 *  post:
 *     tags:
 *     - Task Routes
 *     summary: Update Task
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/UpdateTaskInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateTaskResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post("/update-task", verifyToken, updateTask);

/**
 * @openapi
 * /api/all-tasks:
 *  get:
 *     tags:
 *     - Task Routes
 *     summary: Get all task
 *     description: Get all task
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/all-tasks", verifyToken, getAllTasks);

/**
 * @openapi
 * '/api/task/detail/{id}':
 *  get:
 *     tags:
 *     - Task Routes
 *     summary: Get a single task by the task id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the task
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/TaskDetailResponse'
 *       404:
 *         description: Contact not found
 */
router.get("/task/detail/:id", verifyToken, getTaskDetail);

/**
 * @openapi
 * '/api/delete-tasks':
 *  post:
 *     tags:
 *     - Task Routes
 *     summary: Delete Tasks
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/DeleteTaskInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/DeleteTaskResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post("/delete-tasks", verifyToken, deleteTasks);

/**
 * @openapi
 * '/api/create-meeting':
 *  post:
 *     tags:
 *     - Meeting Routes
 *     summary: Create Meeting
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateMeetingInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateMeetingResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post("/create-meeting", verifyToken, createMeeting);

/**
 * @openapi
 * /api/all-meetings:
 *  get:
 *     tags:
 *     - Meeting Routes
 *     summary: Get all meetings
 *     description: Get all meetings
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/all-meetings", verifyToken, getAllMeetings);

/**
 * @openapi
 * '/api/meeting/detail/{id}':
 *  get:
 *     tags:
 *     - Meeting Routes
 *     summary: Get a single meeting by the meeting id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the meeting
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/MeetingDetailResponse'
 *       404:
 *         description: Contact not found
 */
router.get("/meeting/detail/:id", verifyToken, getMeetingDetail);

/**
 * @openapi
 * '/api/update-meeting':
 *  post:
 *     tags:
 *     - Meeting Routes
 *     summary: Update Meeting
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/UpdateMeetingInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateMeetingResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post("/update-meeting", verifyToken, updateMeeting);

/**
 * @openapi
 * '/api/delete-meetings':
 *  post:
 *     tags:
 *     - Meeting Routes
 *     summary: Delete Meeting
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/DeleteMeetingInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/DeleteMeetingResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post("/delete-meetings", verifyToken, deleteMeetings);

/**
 * @openapi
 * '/api/create-email':
 *  post:
 *     tags:
 *     - Email Routes
 *     summary: Create Email
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateEmailInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateMeetingResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post("/create-email", verifyToken, createEmail);

/**
 * @openapi
 * /api/all-emails:
 *  get:
 *     tags:
 *     - Email Routes
 *     summary: Get all emails
 *     description: Get all emails
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/all-emails", verifyToken, getAllEmails);

/**
 * @openapi
 * '/api/email/detail/{id}':
 *  get:
 *     tags:
 *     - Email Routes
 *     summary: Get a single email by the email id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the email
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/EmailDetailResponse'
 *       404:
 *         description: Contact not found
 */
router.get("/email/detail/:id", verifyToken, getEmailDetail);

/**
 * @openapi
 * '/api/delete-emails':
 *  post:
 *     tags:
 *     - Email Routes
 *     summary: Delete Email
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/DeleteEmailInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/DeleteEmailResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post("/delete-emails", verifyToken, deleteEmails);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  register,
  login,
  forget,
  resetPassword,
  getUsers,
} = require("../controllers/userController");
const { verifyToken } = require("../services/authServices");

/**
 * @openapi
 * '/api/register':
 *  post:
 *     tags:
 *     - Auth Routes
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUserInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post("/register", register);

/**
 * @openapi
 * '/api/login':
 *  post:
 *     tags:
 *     - Auth Routes
 *     summary: Login a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/LoginInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LoginResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post("/login", login);

/**
 * @openapi
 * '/api/forget':
 *  post:
 *     tags:
 *     - Auth Routes
 *     summary: Forget password
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/ForgetInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ForgetResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post("/forget", forget);

/**
 * @openapi
 * '/api/reset-password':
 *  post:
 *     tags:
 *     - Auth Routes
 *     summary: Reset password
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/ResetInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ResetResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post("/reset-password", resetPassword);

/**
 * @openapi
 * /api/users:
 *  get:
 *     tags:
 *     - Auth Routes
 *     summary: Get all users
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/users", verifyToken, getUsers);

module.exports = router;

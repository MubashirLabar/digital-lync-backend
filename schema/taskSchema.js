// Create Task Schemas
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateTaskInput:
 *      type: object
 *      required:
 *        - subject
 *        - due_date
 *        - owner_id
 *      properties:
 *        subject:
 *          type: string
 *          default: TASK1
 *        due_date:
 *          type: string
 *          default: 2024-03-27T09:34:38.479Z
 *        priority:
 *          type: string
 *          default: high
 *        owner_id:
 *          type: string
 *          default: 19
 *    CreateTaskResponse:
 *      type: object
 *      properties:
 *        success:
 *          type: boolean
 *        message:
 *          type: string
 *        data:
 *          type: object
 *          properties:
 *                id:
 *                      type: string
 *                subject:
 *                      type: string
 *                due_date:
 *                      type: string
 *                priority:
 *                      type: string
 *                owner_id:
 *                      type: string
 *                created_at:
 *                      type: string
 *          required:
 *                - success
 *                - message
 *                - data
 */

// Get Single Task Detail Schemas
/**
 * @openapi
 * components:
 *  schemas:
 *    TaskDetailResponse:
 *      type: object
 *      properties:
 *        success:
 *          type: boolean
 *        message:
 *          type: string
 *        data:
 *          type: object
 *          properties:
 *            id:
 *              type: string
 *            subject:
 *              type: string
 *            due_date:
 *              type: string
 *            priority:
 *              type: string
 *            owner_id:
 *              type: string
 *            created_at:
 *              type: string
 *        required:
 *          - success
 *          - message
 *          - data
 */

// Update Task Schemas
/**
 * @openapi
 * components:
 *  schemas:
 *    UpdateTaskInput:
 *      type: object
 *      required:
 *        - id
 *        - subject
 *        - due_date
 *        - owner_id
 *      properties:
 *        id:
 *          type: string
 *          default: 2
 *        subject:
 *          type: string
 *          default: TASK222
 *        due_date:
 *          type: string
 *          default: 2024-03-27T09:34:38.479Z
 *        priority:
 *          type: string
 *          default: high
 *        owner_id:
 *          type: string
 *          default: 19
 *    UpdateTaskResponse:
 *      type: object
 *      properties:
 *        success:
 *          type: boolean
 *        message:
 *          type: string
 *        data:
 *          type: object
 *          properties:
 *                id:
 *                      type: string
 *                subject:
 *                      type: string
 *                due_date:
 *                      type: string
 *                priority:
 *                      type: string
 *                owner_id:
 *                      type: string
 *                created_at:
 *                      type: string
 *          required:
 *                - success
 *                - message
 *                - data
 */

// Delete Task Schemas
/**
 * @openapi
 * components:
 *  schemas:
 *    DeleteTaskInput:
 *      type: object
 *      required:
 *        - ids
 *      properties:
 *        ids:
 *          type: array
 *          default: ["4", "5"]
 *    DeleteTaskResponse:
 *      type: object
 *      properties:
 *        success:
 *          type: boolean
 *        message:
 *          type: string
 */

// Create Email Schemas
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateEmailInput:
 *      type: object
 *      required:
 *        - from
 *        - to
 *        - to_date
 *        - detail
 *      properties:
 *        from:
 *          type: string
 *          default: test@gmail.com
 *        to:
 *          type: array
 *          default: ["test1@gmail.com"]
 *        bcc:
 *          type: array
 *          default: ["test2@gmail.com", "test3@gmail.com"]
 *        subject:
 *          type: string
 *          default: Testing Email
 *        detail:
 *          type: string
 *          default: Lorem Ipsum is simply dummy text of the printing and typesetting industry
 *    CreateMeetingResponse:
 *      type: object
 *      properties:
 *        success:
 *          type: boolean
 *        message:
 *          type: string
 *        data:
 *          type: object
 *          properties:
 *                from:
 *                      type: string
 *                to:
 *                      type: array
 *                bcc:
 *                      type: array
 *                subject:
 *                      type: string
 *                detail:
 *                      type: string
 *                created_at:
 *                      type: string
 *          required:
 *                - success
 *                - message
 *                - data
 */

// Delete Email Schemas
/**
 * @openapi
 * components:
 *  schemas:
 *    DeleteEmailInput:
 *      type: object
 *      required:
 *        - ids
 *      properties:
 *        ids:
 *          type: array
 *          default: ["10", "11"]
 *    DeleteEmailResponse:
 *      type: object
 *      properties:
 *        success:
 *          type: boolean
 *        message:
 *          type: string
 */

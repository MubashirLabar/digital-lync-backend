// Create Tracking Schemas
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateTrackingInput:
 *      type: object
 *      properties:
 *              user_id:
 *                type: string
 *                default: 19
 *              address:
 *                type: string
 *                default: Testing default
 *              note:
 *                type: string
 *                default: Any additional notes for the tracking.
 *              file:
 *                type: string
 *                format: binary
 *                description: The file to upload.
 *    CreateTrackingResponse:
 *      type: object
 *      properties:
 *        success:
 *          type: boolean
 *        message:
 *          type: string
 *        data:
 *          type: object
 *          properties:
 *                user_id:
 *                      type: string
 *                address:
 *                      type: string
 *                note:
 *                      type: string
 *                file:
 *                      type: string
 *                created_at:
 *                      type: string
 *          required:
 *                - success
 *                - message
 *                - data
 */

// Get Single Contact Detail Schemas
/**
 * @openapi
 * components:
 *  schemas:
 *    TrackingByUserIdResponse:
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
 *            user_id:
 *              type: string
 *            address:
 *              type: string
 *            note:
 *              type: string
 *            created_at:
 *              type: string
 *        required:
 *          - success
 *          - message
 *          - data
 */

// Delete Contact Schemas
/**
 * @openapi
 * components:
 *  schemas:
 *    DeleteTrackingInput:
 *      type: object
 *      required:
 *        - ids
 *      properties:
 *        ids:
 *          type: string
 *          default: 1
 *    DeleteTrackingResponse:
 *      type: object
 *      properties:
 *        success:
 *          type: boolean
 *        message:
 *          type: string
 */

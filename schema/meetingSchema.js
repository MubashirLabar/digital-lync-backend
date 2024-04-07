// Create Meeting Schemas
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateMeetingInput:
 *      type: object
 *      required:
 *        - name
 *        - from_date
 *        - to_date
 *      properties:
 *        name:
 *          type: string
 *          default: Third Meeting
 *        location:
 *          type: string
 *          default: Garde Town, Multan
 *        from_date:
 *          type: string
 *          default: 2024-03-27T09:34:38.479Z
 *        to_date:
 *          type: string
 *          default: 2024-03-27T09:34:38.479Z
 *        host:
 *          type: string
 *          default: XYZ
 *        participants:
 *          type: array
 *          properties:
 *                user_id:
 *                      type: string
 *                      default: 1
 *                username:
 *                      type: string
 *                      default: mubashirlabar007gmail.com
 *                name:
 *                      type: string
 *                      default: Mubashir
 *                phone:
 *                      type: string
 *                      default: 1223344533
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
 *                id:
 *                      type: string
 *                name:
 *                      type: string
 *                location:
 *                      type: string
 *                from_date:
 *                      type: string
 *                to_date:
 *                      type: string
 *                host:
 *                      type: string
 *                created_at:
 *                      type: string
 *                participants:
 *                      type: object
 *                      properties:
 *                            user_id:
 *                                  type: string
 *                            username:
 *                                  type: string
 *                            name:
 *                                  type: string
 *                            phone:
 *                                  type: string
 *          required:
 *                - success
 *                - message
 *                - data
 */

// Update Meeting Schemas
/**
 * @openapi
 * components:
 *  schemas:
 *    UpdateMeetingInput:
 *      type: object
 *      required:
 *        - id
 *        - name
 *        - from_date
 *        - to_date
 *      properties:
 *        id:
 *          type: string
 *          default: 11
 *        name:
 *          type: string
 *          default: Third Meeting
 *        location:
 *          type: string
 *          default: Garde Town, Multan
 *        from_date:
 *          type: string
 *          default: 2024-03-27T09:34:38.479Z
 *        to_date:
 *          type: string
 *          default: 2024-03-27T09:34:38.479Z
 *        host:
 *          type: string
 *          default: XYZ
 *        participants:
 *          type: array
 *          properties:
 *                user_id:
 *                      type: string
 *                      default: 1
 *                username:
 *                      type: string
 *                      default: mubashirlabar007gmail.com
 *                name:
 *                      type: string
 *                      default: Mubashir
 *                phone:
 *                      type: string
 *                      default: 1223344533
 *    UpdateMeetingResponse:
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
 *                name:
 *                      type: string
 *                location:
 *                      type: string
 *                from_date:
 *                      type: string
 *                to_date:
 *                      type: string
 *                host:
 *                      type: string
 *                created_at:
 *                      type: string
 *                participants:
 *                      type: object
 *                      properties:
 *                            user_id:
 *                                  type: string
 *                            username:
 *                                  type: string
 *                            name:
 *                                  type: string
 *                            phone:
 *                                  type: string
 *          required:
 *                - success
 *                - message
 *                - data
 */

// Delete Meeting Schemas
/**
 * @openapi
 * components:
 *  schemas:
 *    DeleteMeetingInput:
 *      type: object
 *      required:
 *        - ids
 *      properties:
 *        ids:
 *          type: array
 *          default: ["10", "11"]
 *    DeleteMeetingResponse:
 *      type: object
 *      properties:
 *        success:
 *          type: boolean
 *        message:
 *          type: string
 */

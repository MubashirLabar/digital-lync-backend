// Register Schemas
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - username
 *        - password
 *        - name
 *        - phone
 *      properties:
 *        username:
 *          type: string
 *          default: jane.doe@example.com
 *        password:
 *          type: string
 *          default: 123456
 *        name:
 *          type: string
 *          default: Jane Doe
 *        phone:
 *          type: string
 *          default: 123453535
 *    CreateUserResponse:
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
 *                username:
 *                      type: string
 *                created_at:
 *                      type: string
 *                name:
 *                      type: string
 *                phone:
 *                      type: string
 *          required:
 *                - success
 *                - message
 *                - data
 */

// Login Schemas
/**
 * @openapi
 * components:
 *  schemas:
 *    LoginInput:
 *      type: object
 *      required:
 *        - username
 *        - password
 *      properties:
 *        username:
 *          type: string
 *          default: jane.doe@example.com
 *        password:
 *          type: string
 *          default: 123456
 *    LoginResponse:
 *      type: object
 *      properties:
 *        success:
 *          type: boolean
 *        message:
 *          type: string
 *        username:
 *          type: string
 *        token:
 *          type: string
 */

// Forget Password Schemas
/**
 * @openapi
 * components:
 *  schemas:
 *    ForgetInput:
 *      type: object
 *      required:
 *        - email
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *    ForgetResponse:
 *      type: object
 *      properties:
 *        success:
 *          type: boolean
 *        message:
 *          type: string
 */

// Reset Password Schemas
/**
 * @openapi
 * components:
 *  schemas:
 *    ResetInput:
 *      type: object
 *      required:
 *        - token
 *        - newPassword
 *      properties:
 *        token:
 *          type: string
 *        newPassword:
 *          type: string
 *    ResetResponse:
 *      type: object
 *      properties:
 *        success:
 *          type: boolean
 *        message:
 *          type: string
 */

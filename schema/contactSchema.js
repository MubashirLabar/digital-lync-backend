// Create Contact Schemas
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateContactInput:
 *      type: object
 *      required:
 *        - company_name
 *        - phone_number
 *        - email
 *        - tax_id
 *      properties:
 *        company_name:
 *          type: string
 *          default: v dhana reddy shipping services
 *        person_name:
 *          type: string
 *          default: testing
 *        contact_type:
 *          type: string
 *          default: testing
 *        phone_number:
 *          type: string
 *          default: 9948234345
 *        email:
 *          type: string
 *          default: testing123@gmail.com
 *        address:
 *          type: string
 *          default: Multan, Cantt
 *        tax_id:
 *          type: string
 *          default: tax2323
 *        description:
 *          type: string
 *          default: testing
 *    CreateContactResponse:
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
 *                company_name:
 *                      type: string
 *                contact_type:
 *                      type: string
 *                phone_number:
 *                      type: string
 *                email:
 *                      type: string
 *                address:
 *                      type: string
 *                tax_id:
 *                      type: string
 *                description:
 *                      type: string
 *                person_name:
 *                      type: string
 *                created_at:
 *                      type: string
 *          required:
 *                - success
 *                - message
 *                - data
 */

// Update Contact Schemas
/**
 * @openapi
 * components:
 *  schemas:
 *    UpdateContactInput:
 *      type: object
 *      required:
 *        - id
 *        - company_name
 *        - phone_number
 *        - email
 *        - tax_id
 *      properties:
 *        id:
 *          type: string
 *        company_name:
 *          type: string
 *        person_name:
 *          type: string
 *        contact_type:
 *          type: string
 *        phone_number:
 *          type: string
 *        email:
 *          type: string
 *        address:
 *          type: string
 *        tax_id:
 *          type: string
 *        description:
 *          type: string
 *    UpdateContactResponse:
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
 *                company_name:
 *                      type: string
 *                contact_type:
 *                      type: string
 *                phone_number:
 *                      type: string
 *                email:
 *                      type: string
 *                address:
 *                      type: string
 *                tax_id:
 *                      type: string
 *                description:
 *                      type: string
 *                person_name:
 *                      type: string
 *                created_at:
 *                      type: string
 *          required:
 *                - success
 *                - message
 *                - data
 */

// Delete Contact Schemas
/**
 * @openapi
 * components:
 *  schemas:
 *    DeleteContactInput:
 *      type: object
 *      required:
 *        - ids
 *      properties:
 *        ids:
 *          type: array
 *          default: ["9"]
 *    DeleteContactResponse:
 *      type: object
 *      properties:
 *        success:
 *          type: boolean
 *        message:
 *          type: string
 */

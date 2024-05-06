import { sendErrorResponse } from '../utils/response-handler-utils'
export const signupAdminMiddleware = async (req, res, next) => {
    try {
        if (Object.keys(req.body).length == 0) {
            sendErrorResponse(res, 400, "please pass data with body")
        }
        req.role = "admin"
        next()
    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
    }
}
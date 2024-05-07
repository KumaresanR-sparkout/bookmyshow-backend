import { sendErrorResponse } from '../utils/response-handler-utils'
export const signupVisitorMiddleware = async (req, res, next) => {
    try {
        if (Object.keys(req.body).length == 0) {
            return sendErrorResponse(res, 400, "please pass data with body")
        }
        req.role = "visitor"
        next()
    }
    catch (error) {
        return sendErrorResponse(res, 500, error.message)
    }
}
import { sendErrorResponse } from '../utils/commonResponse-utils'
export const signupVisitorMiddleware = async (req, res, next) => {
    try {
        if (Object.keys(req.body).length == 0) {
            sendErrorResponse(res, 400, "please pass data with body")
            return
        }
        req.role = "visitor"
        next()
    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
    }
}
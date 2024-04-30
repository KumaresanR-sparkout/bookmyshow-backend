import { sendErrorResponse } from "../utils/errorResponse"
export const signupVisitorMiddleware = async (req, res, next) => {
    try {
        if (Object.keys(req.body).length == 0) {
            res.status(400).send(sendErrorResponse(400, "please pass data with body"))
        }
        else {
            req.role = "visitor"
            next()
        }
    }
    catch (error) {
        res.status(500).send(sendErrorResponse(500, error.message))
    }
}
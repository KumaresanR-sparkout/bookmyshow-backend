import jsonwentoken from 'jsonwebtoken'
import { sendErrorResponse } from '../utils/response-handler-utils'
require('dotenv').config()

export const verifyToken = (req, res, next) => {
    try {
        const token = req.header('Authorization')
        if (!token) {
            return sendErrorResponse(res, 401, "please send token to acess route")
        }
        const verifyToken = jsonwentoken.verify(token, process.env.KEY, (error, response) => {
            if (error) {
                return sendErrorResponse(res, 500, error.message)
            }

            if (response.data.role != "admin") {
                return sendErrorResponse(res, 401, "you are not allowed to access admin route")
            }
            next()
        })
    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
    }
}
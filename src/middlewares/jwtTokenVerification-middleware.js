import jsonwentoken from 'jsonwebtoken'
import { sendErrorResponse } from '../utils/commonResponse-utils'
require('dotenv').config()

export const verifyToken = (req, res, next) => {
    try {
        const token = req.header('Authorization')
        if (!token) {
            sendErrorResponse(res, 401, "please send token to acess route")
            return
        }
        const verifyToken = jsonwentoken.verify(token, process.env.KEY, (error, response) => {
            if (error) {
                sendErrorResponse(res, 500, error.message)
                return
            }

            if (response.data.role != "admin") {
                sendErrorResponse(res, 401, "you are not allowed to access admin route")
                return
            }
            next()

        })
    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
    }
}
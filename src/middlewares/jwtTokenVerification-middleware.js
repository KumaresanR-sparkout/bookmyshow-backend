import jsonwentoken from 'jsonwebtoken'
import { sendErrorResponse } from '../utils/commonResponse-utils'
require('dotenv').config()

export const verifyToken = (req, res, next) => {
    try {
        const token = req.header('Authorization')
        if (token) {
            const verifyToken = jsonwentoken.verify(token, process.env.KEY, (error, response) => {
                if (error) {
                    sendErrorResponse(res, 500, error.message)
                }
                else {
                    if (response.data.role == "admin") {
                        next()
                    }
                    else {
                        sendErrorResponse(res, 401, "you are not allowed to access admin route")
                    }
                }
            })
        }
        else {
            sendErrorResponse(res, 401, "please send token to acess route")
        }
    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
    }
}
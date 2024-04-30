import jsonwentoken from 'jsonwebtoken'
import { sendErrorResponse } from '../utils/errorResponse'
require('dotenv').config()

export const verifyToken = (req, res, next) => {
    try {
        const token = req.header('Authorization')
        if (token) {
            const verifyToken = jsonwentoken.verify(token, process.env.KEY, (error, response) => {
                if (error) {
                    res.status(500).send(sendErrorResponse(500, error.message))
                }
                else {
                    if (response.data.role == "admin") {
                        next()
                    }
                    else {
                        res.status(401).send(sendErrorResponse(401, "you are not allowed to access admin route"))
                    }
                }
            })
        }
        else {
            res.status(401).send(sendErrorResponse(401, "please send token to acess route"))
        }
    }
    catch (error) {
        res.status(500).send(sendErrorResponse(500, error.message))
    }
}
import UserAccount from '../models/user.model'
import { sendSuccessResponse, sendErrorResponse } from '../utils/responseHandler-utils'
import jsonwebtoken from 'jsonwebtoken'
require('dotenv').config()

export const visitorLoginAccount = async (req, res) => {
    try {
        const existingUser = await UserAccount.findOne({ email: req.body.email })

        if (!existingUser) {
            sendErrorResponse(res, 400, "No user found, please signup and login")
            return
        }
        if (existingUser.role != "visitor") {
            sendErrorResponse(res, 400, "you are not able to access visitor route")
            return
        }
        if (existingUser.email == req.body.email && existingUser.password == req.body.password) {

            const jwt = jsonwebtoken.sign({ data: { email: existingUser.email, role: "visitor" } }, process.env.KEY, { expiresIn: '1h' })
            const sendResponse = { existingUser, "token": jwt }

            sendSuccessResponse(res, 200, "user loggedIn successfully", sendResponse)
            return
        }
        else {
            sendErrorResponse(res, 400, "use valied login credentials")
            return
        }
    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
        return
    }
}
import UserAccount from '../models/user.model'
import { sendSuccessResponse, sendErrorResponse } from '../utils/commonResponse-utils'
import jsonwebtoken from 'jsonwebtoken'
require('dotenv').config()

export const adminLoginAccount = async (req, res) => {
    try {
        const existingUser = await UserAccount.findOne({ email: req.body.email })
        if (existingUser) {
            if (existingUser.role == "admin") {
                if (existingUser.email == req.body.email && existingUser.password == req.body.password) {

                    const jwt = jsonwebtoken.sign({ data: { email: existingUser.email, role: "admin" } }, process.env.KEY, { expiresIn: '1h' })
                    const sendResponse = { existingUser, "token": jwt }

                    sendSuccessResponse(res, 200, "user loggedIn successfully", sendResponse)

                }
                else {
                    sendErrorResponse(res, 400, "use valied login credentials")
                }
            }
            else {
                sendErrorResponse(res, 400, "you are not able to access admin route")
            }
        }
        else {
            sendErrorResponse(res, 400, "No user found, please signup and login")
        }

    }
    catch (error) {
        sendErrorResponse(res, 500, "something went wrong !! you are not supposed to login")
    }
}
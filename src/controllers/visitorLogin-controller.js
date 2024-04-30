import UserAccount from '../models/user.model'
import { sendSuccessResponse } from '../utils/successResponse'
import { sendErrorResponse } from '../utils/errorResponse'
import jsonwebtoken from 'jsonwebtoken'
require('dotenv').config()

export const visitorLoginAccount = async (req, res) => {
    try {
        const existingUser = await UserAccount.findOne({ email: req.body.email })
        console.log(existingUser)
        if (existingUser) {
            if (existingUser.role == "visitor") {
                if (existingUser.email == req.body.email && existingUser.password == req.body.password) {
                    const jwt = jsonwebtoken.sign({ data: { email: existingUser.email, role: "visitor" } }, process.env.KEY, { expiresIn: '1h' })
                    const sendResponse = { existingUser, "token": jwt }

                    res.status(200).send(sendSuccessResponse(200, "user loggedIn successfully", sendResponse))
                }
                else {
                    res.status(400).send(sendErrorResponse(400, "use valid login credentials"))
                }
            }
            else {
                res.status(400).send(sendErrorResponse(400, "you are not able to access visitor route"))
            }
        }
        else {
            res.status(400).send(sendErrorResponse(400, "No user found, please signup and login"))
        }
    }
    catch (error) {
        res.status(500).send(sendErrorResponse(500, error.message))
    }
}
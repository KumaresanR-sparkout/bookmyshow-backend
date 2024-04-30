import UserAccount from '../models/user.model'
import { sendSuccessResponse } from '../utils/successResponse'
import { sendErrorResponse } from '../utils/errorResponse'

export const visitorLoginAccount = async (req, res) => {
    try {
        const existingUser = await UserAccount.findOne({ email: req.body.email })
        if (existingUser.role == "visitor") {
            if (existingUser.email == req.body.email && existingUser.password == req.body.password) {
                res.status(201).send(sendSuccessResponse(201, "user loggedIn successfully", existingUser))
            }
            else {
                res.status(400).send(sendErrorResponse(400, "use valid login credentials"))
            }
        }
        else {
            res.status(400).send(sendErrorResponse(400, "you are not able to access visitor route"))
        }
    }
    catch (error) {
        res.status(500).send(sendErrorResponse(500, "something went wrong !! you are not supposed to login"))
    }
}
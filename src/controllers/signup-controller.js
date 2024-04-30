import UserAccount from '../models/user.model'
import { sendSuccessResponse } from '../utils/successResponse'
import { sendErrorResponse } from '../utils/errorResponse'

export const signupAccount = async (req, res) => {
    try {
        const existingUser = await UserAccount.findOne({ email: req.body.email })
        if (!existingUser) {
            const userData = { email: req.body.email, password: req.body.password, role: req.role }
            const signupUser = await new UserAccount(userData).save()
            res.status(201).send(sendSuccessResponse(201, "user signedUp successfully", signupUser))
        }
        else {
            res.status(400).send(sendErrorResponse(400, "already email has been registered"))
        }

    }
    catch (error) {
        res.status(500).send(sendErrorResponse(500, "account not created! something went wrong"))
    }
}
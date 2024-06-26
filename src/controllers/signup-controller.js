import UserAccount from '../models/user.model'
import { sendSuccessResponse, sendErrorResponse } from '../utils/response-handler-utils'


export const signupAccount = async (req, res) => {
    try {
        const existingUser = await UserAccount.findOne({ email: req.body.email })
        if (!existingUser) {
            const userData = { email: req.body.email, password: req.body.password, role: req.role }
            const signupUser = await new UserAccount(userData).save()
            return sendSuccessResponse(res, 201, "user signedUp successfully", signupUser)
        }
        else {
            return sendErrorResponse(res, 400, "already email has been registered")
        }
    }
    catch (error) {
        return sendErrorResponse(res, 500, "account not created! something went wrong")
    }
}
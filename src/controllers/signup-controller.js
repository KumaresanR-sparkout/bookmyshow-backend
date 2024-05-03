import UserAccount from '../models/user.model'
import { sendSuccessResponse, sendErrorResponse } from '../utils/commonResponse-utils'


export const signupAccount = async (req, res) => {
    try {
        const existingUser = await UserAccount.findOne({ email: req.body.email })
        if (!existingUser) {
            const userData = { email: req.body.email, password: req.body.password, role: req.role }
            const signupUser = await new UserAccount(userData).save()
            sendSuccessResponse(res, 201, "user signedUp successfully", signupUser)
        }
        else {
            sendErrorResponse(res, 400, "already email has been registered")
        }

    }
    catch (error) {
        sendErrorResponse(res, 500, "account not created! something went wrong")
    }
}
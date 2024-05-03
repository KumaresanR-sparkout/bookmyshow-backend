import { otpGen } from 'otp-gen-agent'
import { sendSuccessResponse, sendErrorResponse } from '../utils/commonResponse-utils';
import OtpModel from '../models/otp.model'
export const otpGenerator = async (req, res) => {
    try {
        const email = req.body
        const otp = await otpGen()
        const existingUser = await OtpModel.findOne(email)
        if (!existingUser) {
            const newUser = await new OtpModel({ ...req.body, otp }).save()
            sendSuccessResponse(res, 201, "otp sent provided email successfully", newUser)
        }
        else {
            sendErrorResponse(res, 400, "email has not been registered")
        }
    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
    }

}
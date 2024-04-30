import { otpGen } from 'otp-gen-agent'
import { sendErrorResponse } from '../utils/errorResponse';
import { sendSuccessResponse } from '../utils/successResponse';
import OtpModel from '../models/otp.model'
export const otpGenerator = async (req, res) => {
    try {
        const email = req.body
        const otp = await otpGen()
        const existingUser = await OtpModel.findOne(email)
        if (!existingUser) {
            const newUser = await new OtpModel({ ...req.body, otp }).save()
            res.status(201).send(sendSuccessResponse(201, "otp sent provided email successfully", newUser))
        }
        else {
            res.status(400).send(sendErrorResponse(400, "email has not been registered"))
        }
    }
    catch (error) {
        res.status(500).send(sendErrorResponse(500, error.message))
    }

}
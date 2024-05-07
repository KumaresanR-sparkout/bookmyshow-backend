import OTP from '../models/otp.model'
import { sendErrorResponse } from '../utils/response-handler-utils'

export const verifyOtp = async (req, res, next) => {
    try {
        const otp = req.body.otp
        const otpVerification = await OTP.findOne({ email: req.body.email })
        if (!otpVerification) {
            return sendErrorResponse(res, 401, "no user found to verify otp")
        }
        if (otpVerification.otp != otp) {
            return sendErrorResponse(res, 401, "otp mismatched")
        }
        next()
    }
    catch (error) {
        return sendErrorResponse(res, 500, error.message)
    }

}
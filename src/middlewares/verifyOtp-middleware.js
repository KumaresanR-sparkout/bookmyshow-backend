import OTP from '../models/otp.model'
import { sendErrorResponse } from '../utils/commonResponse-utils'

export const verifyOtp = async (req, res, next) => {
    try {
        const otp = req.body.otp
        const otpVerification = await OTP.findOne({ email: req.body.email })
        // console.log(otpVerification)
        if (otpVerification) {
            if (otpVerification.otp != otp) {
                sendErrorResponse(res, 401, "otp mismatched")
            }
            next()
        }
        else {

            sendErrorResponse(res, 401, "no user found to verify")
        }
    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
    }

}
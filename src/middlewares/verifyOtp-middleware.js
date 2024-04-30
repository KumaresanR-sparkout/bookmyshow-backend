import OTP from '../models/otp.model'
import { sendErrorResponse } from '../utils/errorResponse'

export const verifyOtp = async (req, res, next) => {
    try {
        const otp = req.body.otp
        const otpVerification = await OTP.findOne({ email: req.body.email })
        console.log(otpVerification)
        if (otpVerification) {
            if (otpVerification.otp != otp) {
                res.status(401).send(sendErrorResponse(401, "otp mismatched"))
            }
            next()
        }
        else {
            console.log("2345678")
            res.status(401).send(sendErrorResponse(401, "no user found to verify"))
        }
    }
    catch (error) {
        res.status(500).send(sendErrorResponse(500, error.message))
    }

}
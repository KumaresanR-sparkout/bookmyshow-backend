import mongoose from "mongoose";
import { emailVerification } from '../controllers/mail-controller'
const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    otp: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        expires: 60 * 5,
        default: new Date()
    }
})

otpSchema.pre('save', async function (next) {
    console.log("document saved")
    if (this.isNew) {
        emailVerification(this.email, this.otp)
    }
    next()
})


export default mongoose.model("OtpModel", otpSchema)


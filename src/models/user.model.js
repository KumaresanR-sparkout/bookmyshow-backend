import mongoose from "mongoose";

const userAccount = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "visitor"]
    }
})
export default mongoose.model('UserAccount', userAccount)
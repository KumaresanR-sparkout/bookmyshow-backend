import mongoose from 'mongoose'

const movieScreen = new mongoose.Schema({
    screenId: {
        type: Number,
        unique: true,
        required: true
    },
    screen: {
        type: [String],
        trim: true,
        required: true
    },
    cinema: {
        type: String,
        trim: true,
        required: true
    },
    locality: {
        type: String,
        trim: true,
        required: true
    },
    city: {
        type: String,
        trim: true,
        required: true
    }

})

export default mongoose.model('MovieScreen', movieScreen)
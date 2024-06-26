import mongoose from 'mongoose'

const screen = new mongoose.Schema({
    screen_id: {
        type: Number,
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
    },
    movie_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movies'
    },
    theatre_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Theatres'
    }
})

export default mongoose.model('Screens', screen)
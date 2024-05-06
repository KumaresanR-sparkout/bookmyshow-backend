import mongoose from "mongoose";
const movies = new mongoose.Schema({
    screen_id: {
        type: Number,
        required: true
    },
    movie_id: {
        type: Number,
        required: true
    },
    movie_name: {
        type: String,
        required: true
    },
    language: {
        type: [String],
        required: true
    },
    time: {
        type: String,
        required: true
    },
    types: {
        type: [String],
        required: true
    },
    release_date: {
        type: Date,
        required: true
    },
    screen_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Screens"
    },
})

export default mongoose.model('Movies', movies)
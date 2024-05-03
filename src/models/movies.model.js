import mongoose from "mongoose";
import MovieScreen from "./screen.model"
const movies = new mongoose.Schema({
    screenId: {
        type: Number,
        required: true
    },
    movieId: {
        type: Number,
        required: true
    },
    movieName: {
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
    screenRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: MovieScreen
    },
})

export default mongoose.model('Movies', movies)
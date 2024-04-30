import mongoose from "mongoose";

const movies = new mongoose.Schema({
    screenId: {
        type: Number,
        unique: true,
        required: true
    },
    movieId: {
        type: Number,
        unique: true,
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
    }
})

export default mongoose.model('Movies', movies)
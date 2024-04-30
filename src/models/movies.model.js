import mongoose from "mongoose";

const movies = new mongoose.Schema({
    movieName: {
        type: String,
        required: true
    },
    reviews: {
        ratings: {
            type: Number,
            default: null
        },
        votes: {
            type: Number,
            default: null
        },
        likes: {
            type: Number,
            default: null
        },

    },
    screen: {
        type: String,
        required: true
    },
    language: {
        type: String,
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
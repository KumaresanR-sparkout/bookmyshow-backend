import mongoose from "mongoose";


const theatre = new mongoose.Schema({
    screen_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Screens"
    },
    movie_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movies"
    },
    available_timings: {
        type: [String],
        required: true
    },
    cancellation: {
        type: String,
        required: true,
        enum: ["cancellable", "non-cancellable"]
    }

})

export default mongoose.model('Theatres', theatre)
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    excercises: {
        type: String,
        default: "workout"
    },
    name: {
        type: String,
        default: "type"
    },
    duration: {
        type: Number,
        default: "60"
    },
    weight: {
        type: Number,
        default: "100"
    },
    reps: {
        type: Number,
        default: "50"
    },
    sets: {
        type: Number,
        default: "4"
    }
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
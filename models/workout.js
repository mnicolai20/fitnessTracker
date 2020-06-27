const mongoose = require("mongoose");

// Database Schema
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
        type: {
            type: String,
            required: "Must enter type"
        },
        name: {
            type: String,
            required: "Must enter name"
        },
        duration: {
            type: Number,
            required: "Enter minutes duration"
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number
        }
    }],
},
{
    toJSON: {
        virtuals: true
    }
}
);

workoutSchema.virtual("totalDuration").get(function(){
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration
    }, 0);
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
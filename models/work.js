const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workSchema = new Schema({

    day: {
        _type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            _type: String,
            trim: true,
        },
        name: {
            _type: String,
            trim: true,
        },
        duration: {
            _type: Number,
        },
        weight: {
            _type: Number,
        },
        reps: {
            _type: Number,
        },
        sets: {
            _type: Number,
        }
    }]


}, {
    typeKey: "_type"
});

const Workout = mongoose.model("workout", workSchema);

module.exports = Workout;
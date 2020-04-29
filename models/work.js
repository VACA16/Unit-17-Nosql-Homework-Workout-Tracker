const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Enter type of exercise type"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter type of exercise name"
    },
    duration: {
        type: Number,
        required: "Enter duration"
    },
    weight: {
        type: Number,
        required: "Enter weight"
    },
    reps: {
        type: Number,
        required: "Enter number of reps"
    },
    sets: {
        type: Number,
        required: "Enter number of sets"
    },

});

const Work = mongoose.model("Work", workSchema);

module.exports = Work;
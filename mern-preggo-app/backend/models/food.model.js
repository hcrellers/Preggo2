const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    food: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        max: 10000,
        required: true
    },
    meal: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
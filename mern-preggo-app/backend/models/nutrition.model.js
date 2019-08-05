const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const nutritionSchema = new Schema({
    food: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        max: 10000,
        required: true
    },
    protein: {
        type: Number,
        max: 100,
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

const Nutrition = mongoose.model("Nutrition", mealSchema);

module.exports = Nutrition;
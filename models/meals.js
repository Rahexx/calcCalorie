import mongoose from 'mongoose';
const { Schema } = mongoose;

const mealsSchema = new Schema({
    userId: { type: ObjectId, required: true },
    breakfast: { type: Array, required: true },
    secondBreakfast: { type: Array, required: true },
    dinner: { type: Array, required: true },
    supper: { type: Array, required: true },
    snacks: { type: Array, required: true },
    sumNutritionsValues: { type: Array, required: true }
});

module.exports = mongoose.model('Meals', mealsSchema)
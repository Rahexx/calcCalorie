import mongoose from 'mongoose';
const { Schema } = mongoose;

const limitsNutritionsSchema = new Schema({
    userId: { type: ObjectId, required: true },
    calories: { type: Number, required: true },
    protein: { type: Number, required: true },
    carbohydrates: { type: Number, required: true },
    fat: { type: Number, required: true },

});

module.exports = mongoose.model('Limits', limitsNutritionsSchema)
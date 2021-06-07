import mongoose from 'mongoose';
const { Schema } = mongoose;

const foodSchema = new Schema({
    foodName: { type: String, required: true },
    description: { type: String, required: true },
    nutritionsValues: { type: Array, required: true },
});

module.exports = mongoose.model('Food', foodSchema)
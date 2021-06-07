import mongoose from 'mongoose';
const { Schema } = mongoose;

const dimensionsSchema = new Schema({
    userId: { type: ObjectId, required: true },
    height: { type: Number, required: true },
    width: { type: Number, required: true },
});

module.exports = mongoose.model('Dimensions', dimensionsSchema)
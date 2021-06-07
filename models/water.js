import mongoose from 'mongoose';
const { Schema } = mongoose;

const waterSchema = new Schema({
    userId: { type: ObjectId, required: true },
    ammountWater: { type: Array, required: true },
});

module.exports = mongoose.model('Water', waterSchema)
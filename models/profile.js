import mongoose from 'mongoose';
const { Schema } = mongoose;

const profileSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    login: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('Profile', profileSchema)